'use client'
import React, { useEffect, useState } from "react";

import Image from "next/image";

import { useSearchParams } from 'next/navigation'
import Link from "next/link";

import FSU from "../../../public/FSU.svg"

interface Message {
    message? : string
}

export const ContactResponse = ({ shown, setShown }: { shown: "ERROR" | "SUCCESS" | null, setShown: React.Dispatch<React.SetStateAction<"ERROR" | "SUCCESS" | null>> }) => {

    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setTrigger(true)
        }, 50)
        setTimeout(() => {
            setShown(null)
            setTrigger(false)
        }, 4000)
    }, [shown])

    return (
        <div className={`overflow-hidden ${shown === "SUCCESS" ? "bg-[#2DD284]" : "bg-[#DA4242]"}  text-white text-lg px-10 py-5 rounded-xl fixed top-5 right-5 w-fit ${shown !== null ? "visible opacity-100" : "invisible opacity-0"}`}>
            {shown === "SUCCESS" && <span>Your form has been submitted</span>}
            {shown === "ERROR" && <span>There was an error submitting your form. Please try again</span>}
            <button onClick={() => setShown(null)} type="button" className="hover:scale-110 transition duration-150 absolute top-2 right-2 w-[25px] h-[25px] flex justify-center items-center rotate-45 rounded-full bg-[rgba(0,0,0,0.5)] text-xl font-bold"><span className="absolute left-1/2 top-1/2 translate-x-[-55%] translate-y-[-52%]">+</span></button>
            <div className={`absolute ${trigger && "!w-0"} w-[100%] transition-all ease-linear duration-[4s] h-[6px] bottom-0 left-0 bg-gray-400 overflow-hidden `} />
        </div>
    )
}


const ContactForm = (props : Message) => {

    const [formResponse, setFormResponse] = useState<"ERROR" | "SUCCESS" | null>(null)

    const [message, setMessage] = useState(props.message)

    const params = useSearchParams()

    return (
        <form className="w-full flex flex-col h-full justify-center" onSubmit={(e) => {
            e.preventDefault()
            const target = e.target as HTMLFormElement
            fetch("/api/contact",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        Name: target.Name.value,
                        Email: target.Email.value,
                        Message: target.Message.value
                    })

                } 
                )
                .then((res) => {
                    if (res.ok) {
                        target.reset()
                        setFormResponse("SUCCESS")
                    } else {
                        setFormResponse("ERROR")
                    }
                })
                .catch(err => setFormResponse("ERROR"))
        }}>
            <div className="w-full mb-2 space-y-1">
                <label htmlFor="Name" className="text-gray-400">Name</label>
                <input required name="Name" type="text" placeholder="John Doe" className="px-4 py-4 w-full bg-slate-200 rounded-lg placeholder:text-sm" />
            </div>
            <div className="w-full my-2 space-y-1">
                <label htmlFor="Email" className="text-gray-400">Email</label>
                <input required name="Email" type="email" placeholder="youremail@gmail.com" className="px-4 py-4 w-full bg-slate-200 rounded-lg placeholder:text-sm" />
            </div>

            <div className="w-full my-2 space-y-1">
                <label htmlFor="Message" className="text-gray-400">Message</label>
                <textarea required name="Message" placeholder="Type your message here..." value={message} onChange={(t) => setMessage(t.target.value)} className="px-4 py-4 text-wrap bg-slate-200 rounded-lg w-full h-[20vh] flex placeholder:text-sm" />
            </div>
            <button className="bg-black rounded-lg w-full my-2" type="submit">
                <p className="text-normal pl-8 py-4 text-white h-full flex">
                    Submit Message
                </p>
            </button>
            {formResponse !== null && <ContactResponse shown={formResponse} setShown={setFormResponse} />}
        </form>
    )
}

const GetInTouch = (props : Message) => {
    return (
        <section className="w-full relative py-12 md:py-24">

            {/* Background Image */}
            <Image src={FSU} alt="WebTechCD Office Location" className="-z-10 object-cover" fill/>

            <div className="transition-all duration-300 container mx-auto">
                <div className="w-full bg-white sm:rounded-lg p-8 md:p-24">
                    
                    {/* Contact Card Header */}
                    <h2 className="text-4xl md:text-5xl font-sans font-bold">Get In Touch!</h2>

                    {/* Contact Card Body */}
                    <div className="grid grid-cols-1 mt-12 ">
                        {/* Contact Form Container */}
                        <div className="mt-6 md:mt-0">
                            <h4 className="text-2xl font-bold">Send Me a Message</h4>
                            <ContactForm message={props.message}/>
                        </div>

                    </div>

                </div>
            </div>
        </section >
    )
}

export default GetInTouch