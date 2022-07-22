
const bcrypt =require("bcrypt") 
const mailgun = require("mailgun-js");
import connectDB from './connectDB'

const DOMAIN = process.env.DOMAIN_NAME;
const UserOtpVerification = require('../models/userOtpVerification')
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });
connectDB()

export const sendOtpVerificationEmail = async (email) => {
    try {
        const otp = `${Math.floor((Math.random() * 900000) + 100000)}`;
        const data = {
            from: 'noreply@gmail.com',
            to: email,
            subject: 'You’re almost done!',
            text: ` Hi ${email},
        
            We just need to verify your email address before you can access our [customer portal].
            
            Verify your email address with the following OTP   [${otp}]
            
            Thanks! – The Apps Deployer team`
        };
        const salt = bcrypt.genSaltSync(10)
        const hashOtp = await bcrypt.hashSync(otp, salt)

        const newUserOtpVerification = await new UserOtpVerification({
            email: email,
            otp: otp,
            createAt: Date.now(),
            expireAt: Date.now() + 300000
        })
        await newUserOtpVerification.save()
        await mg.messages().send(data, function (error, body) {
            console.log(body);
        })

    } catch (err) {
        console.log(err)
    }
}
export const sendEmails = async (email,username ,password,compaing_id) => {
    try {
        const data = {
            from: 'noreply@gmail.com',
            to: email,
            subject: 'You’re almost done!',
            text: ` Hi ${username},
            we are so proud of you to join our platform. This is your secret info that enables you to log in here :
            - Email:${email}
            - Password:${password}
            - Compaing_id:${compaing_id}      
           `
        };
       
        await mg.messages().send(data, function (error, body) {
            console.log(body);
        })

    } catch (err) {
        console.log(err)
    }
}


