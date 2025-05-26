import { BaseHeading } from "@/components/heading";
import { generatePageMetadata } from "@/components/seo";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = generatePageMetadata({
  title: "Contact Pettro |Trusted Help for Pet Owners & Partners",
  description: "Have questions, suggestions, or feedback? Contact Pettro’s team of pet care experts. We're here to help with inquiries, support, and collaborations. Get in touch today!.",
  keywords:['Pettro contact, contact Pettro, Pettro support, get in touch Pettro, pet app support, pet care contact, pet app feedback, contact pet app team, Pettro help, Pettro customer service, talk to Pettro, Pettro email'],
  slug: "/contact-us",
  image: "/pettro-img.png",
});

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <div className="bg-white w-full">
        <BaseHeading>Contact Us</BaseHeading>

        <p className="text-base text-gray-700 font-montserrat leading-relaxed mt-8 mb-6">
          We’re always excited to hear from our users, partners, and fellow pet lovers. 
          Whether you have a suggestion, need technical assistance, or simply want to say hello — 
          we’re here for you. At <strong>Pettro</strong>, our mission is to create meaningful 
          digital experiences for pet owners, and your feedback helps us grow.
        </p>

        <p className="text-base text-gray-700 font-montserrat leading-relaxed mb-6">
          If you have any inquiries, business proposals, or feedback about our app or services, 
          don’t hesitate to reach out. You can contact us anytime by sending an email to {" "} 
          <strong>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pettro92001@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 font-bold underline"
          >
            pettro92001@gmail.com
          </a>. 
            {/* <a
              href="mailto:pettro92001@gmail.com"
              className="text-sky-500 underline font-bold ml-1"
            >
              pettro92001@gmail.com
            </a> */}
          </strong>
          . We aim to respond to all messages within 24 to 48 hours, because your time and feedback matter to us.
        </p>

        <p className="text-base text-gray-700 font-montserrat leading-relaxed mb-6">
          Transparency, innovation, and community support are core values we uphold, and 
          connecting with our users is at the heart of everything we do. Let’s collaborate to 
          create smarter, more compassionate pet care solutions.
        </p>

        <p className="text-base text-gray-700 font-montserrat leading-relaxed">
          Thank you for trusting Pettro — we look forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;



// "use client";
// import { BaseHeading } from "@/components/heading";
// import React, { useState } from "react";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     reason: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     // Add your form submission logic here (e.g., API call)
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-6xl">
//       <div className="bg-white w-full">
//         <div className="mb-28">
//           <BaseHeading>Contact us</BaseHeading>
//           <p className="text-base text-gray-700 font-montserrat leading-relaxed mb-8 mt-12">
//             At Pettro, we value your feedback, questions, and inquiries. Whether
//             you're looking for software solutions or need assistance, we're here
//             to help. Fill out the contact form below, and our team will get back
//             to you promptly. Let's work together to create innovative software
//             solutions that meet your needs. Let me know if you want to
//             incorporate this directly into your code or need further changes!
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-2">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-gray-700 font-medium font-montserrat text-black"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 font-montserrat text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-gray-700 font-medium font-montserrat text-black"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 font-montserrat text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your email"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-2">
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-gray-700 font-medium font-montserrat text-black"
//               >
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 font-montserrat text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your phone number"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="country"
//                 className="block text-gray-700 font-medium font-montserrat text-black"
//               >
//                 Country
//               </label>
//               <input
//                 type="text"
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 font-montserrat text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your country"
//               />
//             </div>
//           </div>

//           <div className="mb-2">
//             <label
//               htmlFor="reason"
//               className="block text-gray-700 font-medium font-montserrat text-black"
//             >
//               Reason for Inquiry
//             </label>
//             <select
//               id="reason"
//               name="reason"
//               value={formData.reason}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 font-montserrat text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option className="text-black font-montserrat" value="">
//                 Select a reason
//               </option>
//               <option className="text-black font-montserrat" value="general">
//                 General Inquiry
//               </option>
//               <option className="text-black font-montserrat" value="support">
//                 Support
//               </option>
//               <option className="text-black font-montserrat" value="feedback">
//                 Feedback
//               </option>
//               <option className="text-black font-montserrat" value="other">
//                 Other
//               </option>
//             </select>
//           </div>

//           <div className="mb-2">
//             <label
//               htmlFor="message"
//               className="block text-gray-700 font-medium text-black font-montserrat"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 text-black font-montserrat border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               placeholder="Write your message here"
//             ></textarea>
//           </div>

//           <div className="w-full sm:w-1/5 ">
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 font-montserrat px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
