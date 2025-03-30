import { useState } from "react";
import emailjs from "@emailjs/browser";
import Layout from "../Component/Layout";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.send(
      process.env.REACT_APP_service_id,
      process.env.REACT_APP_template_id,
      formData,
      process.env.REACT_APP_public_key
    )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("Failed to send message. Try again later."));
  };

  return (
    <Layout>
      <div className="flex flex-col mt-4 md:flex-row items-center justify-between p-8  shadow-lg max-w-8xl mx-auto gap-4">
        <div className="hidden md:flex w-1/2">
          <img src="/Contact-US.jpg" alt="Contact Us" className="w-full h-auto" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-md w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-md w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 border rounded-md w-full h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-sm text-gray-600 text-center">{status}</p>}
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 m-2">
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
            {/* Email Contact */}
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                📧
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Email us
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Get in touch with our team.
              </p>
              <button
                className="mt-2 text-sm text-blue-500 dark:text-blue-400 underline"
              >
                nrsshashi@gmail.com
              </button>
            </div>

            
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                📍
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Visit us
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                NextGen Research & Survey Pvt Ltd
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                8/9B, Block A-3, Mohan Garden, New Delhi - 110059
              </p>
            </div>

            
            <div className="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
              <span className="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                📞
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Call us
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Mon-Fri from 9 AM to 6 PM.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +91 7011763148
              </p>
            </div>
          </div>
      </section>
    </Layout>
  );
};

export default Contact;