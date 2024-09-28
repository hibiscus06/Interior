import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import emailjs from "emailjs-com"; // Import EmailJS
import bg from "../../assets/bg.png";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace these with your own EmailJS service ID, template ID, and user ID
    const serviceID = "service_v8sdbdb";
    const templateID = "template_kl1svay";
    const userID = "nOGJmRsUEyx2SWVXp";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ email: "", message: "" }); // Clear form fields
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send message, please try again.");
      }
    );
  };

  return (
    <>
      <Navbar />
      <div
        className="relative flex flex-col md:flex-row items-center bg-cover bg-center p-8"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Overlay for background color */}
        <div className="absolute inset-0 bg-blue-gray-800/50"></div>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail} // Add the form submit handler
          className="relative z-10 flex flex-col items-start p-4 md:p-8 lg:p-12 space-y-4 max-w-md md:max-w-lg text-white"
        >
          <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-semibold">
            Take the first step to make your dreams become a reality!
          </p>
          <p className="text-[1.5rem] md:text-[2rem] text-gray-300">
            Write to us.
          </p>

          <input
            type="email"
            name="email" // Add name attribute for email
            value={formData.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            className="border-2 border-orange-700 rounded-md p-2 w-full bg-white text-black"
            required
          />

          <textarea
            name="message" // Add name attribute for message
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            className="border-2 border-orange-700 rounded-md p-2 w-full bg-white text-black"
            rows="5"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800"
          >
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
