import NodeMailer from 'nodemailer'

import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from 'next/server';

const transporter = NodeMailer.createTransport({
    debug: true,
    logger: true,
    service: 'Gmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD
    },
    tls:
    {
        ciphers: 'SSLv3'
    }
})


export async function POST(req: Request) {
    const body = await req.json()

    if (body.Name && body.Email && body.Message) {

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: "cpm22h@fsu.edu",
            subject: `${body.Name}`,
            html: `
                <h1> You have recieved a new message from ${body.Name} using your contact form </h1>
                <h3>Email: </h3><span>${body.Email}</span> 
                <h3>Message: </h3>
                <p>${body.Message}</p>
            `
        }

        return transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
            } else {
                console.log(info)
                console.log("message is good")
                NextResponse.json({ message: "Sent success", status: 200 })
            }
        })

    } else {
        return NextResponse.json({ error: "Malformed input data" , status: 500 })
    }
}