"use client";

import { useRef } from "react";
import emailjs from "emailjs-com";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />, label: "Phone", description: "+91 7817874878",
  },
  {
    icon: <FaEnvelope />, label: "Email", description: "sshantanu781@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />, label: "Address", description: "Chandigarh, India",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v4m0pyk", // replace with actual
        "template_oetheg8", // replace with actual
        form.current,
        "jCK2lJ08RZFO0TBDi" // replace with actual
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("Failed to send message, try again later.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] round-xl"
            >
              <h3 className="text-4xl text-accent"> Let's work together</h3>
              <p className="text-white/60">
                I'm always open to exciting projects, or just a good conversation about design and development. Whether you have an idea in mind or need help bringing your vision to life, feel free to reach out — let's build something amazing together.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstname" placeholder="Firstname" required />
                <Input type="text" name="lastname" placeholder="Lastname" required />
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="text" name="phone" placeholder="Phone" required />
              </div>
              {/* select */}
              <Select name="service" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ai">AI Agent</SelectItem>
                    <SelectItem value="web ai">Chat Bot</SelectItem>
                    <SelectItem value="aiml">ML Model</SelectItem>
                    <SelectItem value="app">App Development</SelectItem>
                    <SelectItem value="design">Graphic Design</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[150px]"
                name="message"
                placeholder="Type Your message here."
                required
              />
              {/* button */}
              <Button type="submit" size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 group transition duration-300 hover:text-accent"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex items-center justify-center rounded-full bg-white/10 group-hover:shadow-[0_0_10px_theme('colors.accent')] transition">
                    <div className="text-[28px] text-accent">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.label}</p>
                    <h3 className="text-xl group-hover:text-accent transition">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
