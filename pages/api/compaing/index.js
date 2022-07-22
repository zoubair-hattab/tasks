import connectDB from '../../../utils/connectDB'
import {sendEmails }from '../../../utils/sendEmail'
import Compaings from '../../../models/compaingModel'
import User from '../../../models/userModel'
import bcrypt from "bcrypt"

connectDB()
export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getCompaings(req, res)
            break;
        case "POST":
            await createCompagin(req, res)
            break;
    }
}

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString}

        const excludeFields = ['page', 'sort', 'limit']
        excludeFields.forEach(el => delete(queryObj[el]))
        if(queryObj.title !== 'all')
            this.query.find({title: {$regex: queryObj.title}})

        this.query.find()
        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join('')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 3
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const getCompaings = async (req, res) => {
    try {
        const features = new APIfeatures(Compaings.find(), req.query)
        .filtering().sorting().paginating()

        const compaings = await features.query
        
        res.json({
            status: 'success',
            result: compaings.length,
            compaings
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createCompagin = async (req, res) => {
    try {
        const {
            compaign_type,
            country_first_field,
            email,
            full_phone_number,
            password,
            first_name,
            last_name,
            date_birthday,
            country,
            zip_code,
            address_one,
            address_two,
            city,
            country_business_address,
            legal_business_name,
            business_country,
            business_zip_code,
            business_address_one,
            business_address_two,
            business_city,
            company_role,
            twitter,
            linkedin,
            instagram,
            facebook,
            short_description,
            long_description,
            money_fund,
            raise_period,
            yield_period,
            identity_country,
            identity_type,
            id_image,
            selfie_image,
            status,
            contributor_address,
            numberOfContributor,
         } 
     = req.body

     const newCompaing = new Compaings({
        compaign_type:compaign_type,
        country_first_field:country_first_field,
        email:email,
        phone_number:full_phone_number.phone_number,
        country_code:full_phone_number.country_code,
        password:password,
        first_name:first_name,
        last_name:last_name,
        date_birthday,
        country,
        zip_code,
        address_one,
        address_two,
        city,
        country_business_address,
        legal_business_name,
        business_country,
        business_zip_code,
        business_address_one,
        business_address_two,
        business_city,
        company_role,
        twitter,
        linkedin,
        instagram,
        facebook,
        short_description,
        long_description,
        money_fund,
        raise_period,
        yield_period,
        identity_country,
        identity_type,
        id_image,
        selfie_image,
        status,
        contributor_address,
        numberOfContributor,
     })
     const salt = bcrypt.genSaltSync(10);
     const hash = bcrypt.hashSync(req.body.password, salt);
    
     const savedCompaing=   await newCompaing.save()
        const newUser=new User({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:hash,
            compaing_id:savedCompaing._id,
           })
        const saveduser=await newUser.save();
        await sendEmails(saveduser.email,saveduser.name,req.body.password,saveduser.compaing_id)
        res.json({msg: 'Success! Created a new Compaing and you check you email plaise'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}