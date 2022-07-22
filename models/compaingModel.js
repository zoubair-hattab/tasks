import mongoose from 'mongoose'

const compaingSchema = new mongoose.Schema({

    compaign_type: {type: String, required: true  ,trim: true},
    country_first_field: { type: String, required: true  ,trim: true},
    email: { type: String, required: true,unique: true ,trim: true},
    phone_number:{type: Number, required: true,unique: true ,trim: true},
    country_code:{type: Number, required: true,unique: true ,trim: true},
    password:{ type: String, required: true,trim: true},
    first_name:{type: String ,trim: true},
    last_name:{type: String ,trim: true},
    date_birthday:{ type: Date, required: true,trim: true},
    country:{ type: String, required: true  ,trim: true},
    zip_code:{ type: String, required: true  ,trim: true},
    address_one:{ type: String, required: true  ,trim: true},
    address_two: { type: String,trim: true},
    city:{ type: String, required: true  ,trim: true},
    country_business_address:{ type: String, required: true  ,trim: true},
    legal_business_name:{ type: String, required: true  ,trim: true},
    business_country:{ type: String, required: true  ,trim: true},
    business_zip_code:{ type: String, required: true  ,trim: true},
    business_address_one:{ type: String, required: true  ,trim: true},
    business_address_two: { type: String,trim: true},
    business_city:{ type: String, required: true  ,trim: true},
    company_role:{ type: String, required: true  ,trim: true},
    twitter:{ type: String, required: true  ,trim: true},
    linkedin:{ type: String,trim: true},
    instagram:{ type: String,trim: true},
    facebook:{ type: String,trim: true},
    short_description:{ type: String, required: true  ,trim: true},
    long_description:{ type: String, required: true  ,trim: true},
    money_fund:{type:Number,required: true ,trim: true},
    raise_period:{type:Number,required: true ,trim: true},
    yield_period:{type:Number,required: true ,trim: true},
    identity_country:{ type: String, required: true  ,trim: true},
    identity_type:{ type: String, required: true  ,trim: true},
    id_image:{type:Array,required: true},
    selfie_image:{type:Array,required: true},
    status: { type: String, trim: true},   
    contributor_address:{type:Array ,trim: true},
    numberOfContributor:{type:Number,default:0 ,trim: true}
}, 
{    timestamps: true
})

let Dataset = mongoose.models.compaing || mongoose.model('compaing', compaingSchema)
export default Dataset