'use client'

import { useState } from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import emailjs from '@emailjs/browser'
import { useScrollAnimation } from "./_components/Animations";
import React from 'react';

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

type ContactProps = { setIsLoading?: (val: boolean) => void };

type FormData = { name: string; email: string; message: string };

type Errors = { name: string; email: string; message: string };

export default function Contact ({setIsLoading}: ContactProps): JSX.Element {
  const [formData , setFormData] = useState<FormData>({
    name:"",
    email:"",
    message:"",
  })
  const [errors, setErrors] = useState<Errors>({
    name:"",
    email:"",
    message:""
  })
  useScrollAnimation([]);

  const validation = () => {
    const error: Errors = {
      name:"",
      email:"",
      message:"",
    }

    let isValid = true;

    if (formData.email.trim() === "") {
      error.email = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())
    ) {
      error.email = "Please enter a valid email address(e.g, example@domain.com)";
      isValid = false;
    }

   if (formData.name.trim() === "") {
  error.name = "Name is required";
  isValid = false;
} else if (!/^[A-Za-z\s]{2,30}$/.test(formData.name.trim())) {
  error.name = "Name must be 2-30 letters only";
  isValid = false;
}
     
   // Message validation  
if (formData.message.trim() === "") {
  error.message = "Message is required";
  isValid = false;
} else if (formData.message.trim().length < 10 || formData.message.trim().length > 500) {
  error.message = "Message must be between 10 to 500 characters";
  isValid = false;
}
    setErrors(error)

    return isValid
  }

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  if(!validation()) return
    
    if (setIsLoading) setIsLoading(true)
  try{
    emailjs.init(publicKey)

    const templateParams = {
      from_name:formData.name,
      from_email:formData.email,
      message:formData.message,
    }
    const response = await emailjs.send(serviceId as string,templateId as string,templateParams)
  
    alert("Message sent successfully!")

    setFormData({
      name:"",
      email:"",
      message:""
    })

  }catch(err){
    alert('Failed to send message. Please try again')
  }finally{
    if (setIsLoading) setIsLoading(false)
  }

}


  return (
    <section id="contact" className="w-full px-5 md:px-10 lg:px-20 py-20">
      <p className="fade-in text-gray-200 font-bold text-4xl text-center captionFont tracking-wide mb-5">
        Contact Me
      </p>
      <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
        Got a project, idea or just want to say hello? Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-10  fade-in">
        {/* Contact Info */}
        <div className="space-y-5 ">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center gap-4 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-700/20 transition duration-300">
            <FiMail className="text-xl md:text-2xl text-green-500"/>
            <span className="text-gray-300 text-sm md:text-base">solomonnnamani01@gmail.com</span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 flex items-center gap-4 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-700/20 transition duration-300">
            <FiPhoneCall className="text-xl md:text-2xl text-green-500"/>
            <span className="text-gray-300 text-sm md:text-base">+234 916 572 3228</span>
          </div>
        </div>

        {/* Contact Form */}
        <form  onSubmit={handleSubmit}>
          {/*Name*/}
          <input
            type="text"
            placeholder="Name"
             name="name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({...prev, [e.target.name]:e.target.value})) }
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 outline-none focus:border-green-700 transition"
          />
          {errors.name && (
              <span className=" text-red-600"> {errors.name}</span>
            )}
          {/*Email*/}
          <input
            type="email"
            placeholder="Email"
              name="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({...prev, [e.target.name]:e.target.value})) }
            className="w-full p-3 rounded-lg mt-5 bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 outline-none focus:border-green-700 transition"
          />
           {errors.email && (
              <span className=" text-red-600"> {errors.email}</span>
            )}

           {/*Message*/}
          <textarea
            placeholder="Message"
            rows={5}
             name="message"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({...prev, [e.target.name]:e.target.value})) }
            className="w-full p-3 rounded-lg mt-5 resize-none bg-white/5 border border-white/10 text-gray-200 placeholder-gray-400 outline-none focus:border-green-700 transition"
          />
           {errors.message && (
              <span className=" text-red-600   "> {errors.message}</span>
            )}
           <br/>

          <button
            type="submit"
            className="inline-flex mt-5 items-center  justify-center rounded-lg bg-green-700 px-6 py-3 font-medium text-white shadow-md hover:scale-[1.02] hover:bg-green-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
