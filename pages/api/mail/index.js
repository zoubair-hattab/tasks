import connectDB from '../../../utils/connectDB'
import userOtpVerification from '../../../models/userOtpVerification'
import { sendOtpVerificationEmail } from '@/utils/sendEmail'

connectDB()
export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getMail(req, res)
            break;
        case "POST":
            await sendMail(req, res)
            break;
    }
}



const getMail = async (req, res) => {
    try {
        const userOtp = userOtpVerification.find(req.body.email)

        res.json({
            status: 'success',
            userOtp
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const sendMail = async (req, res) => {
    try {
    await sendOtpVerificationEmail(req.body.email)
    const userOtp = await  userOtpVerification.find({email:req.body.email})

    res.json({
        status: 'success',
        value: userOtp
    })

} catch (err) {
    return res.status(500).json({err: err.message})
}
}