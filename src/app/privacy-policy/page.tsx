"use client";
import { SmallHeading , BaseHeading, XsmallHeading } from "@/components/heading";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl text-black font-geistMono">
     <BaseHeading textTransform="capitalize" >Privacy Policy</BaseHeading>

      <section className="mb-6 mt-12">
      
        <SmallHeading textTransform="capitalize" >1. Introduction</SmallHeading>
        <p className="text-gray-700 font-montserrat text-base leading-relaxed">
          At Pettro, your privacy is our priority. We are committed to
          protecting your personal information and maintaining transparency
          about how we collect, use, and safeguard your data. We collect
          information to provide, personalize, and improve our services, and we
          ensure it is handled responsibly. Your data is used for purposes such
          as processing transactions, enhancing your user experience, and
          communicating updates. We do not sell your personal information and
          only share it with trusted partners as necessary to deliver our
          services or comply with legal obligations. We implement robust
          security measures to protect your data and respect your rights to
          access, correct, or delete your information. If you have any questions
          about our privacy practices, please contact us at [Insert Contact
          Information]. By using our services, you agree to this Privacy Policy.
        </p>
        <p className="text-gray-700 mt-2">
          By using our Services, you agree to the practices described in this
          Privacy Policy. If you do not agree with the terms of this policy,
          please do not use our Services.
        </p>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize" >2. Information We Collect</SmallHeading>
        
        <XsmallHeading textTransform="normal">
          a. Information You Provide:
        </XsmallHeading>
        <ul className="list-disc pl-6 text-gray-700 font-montserrat text-base leading-relaxed">
          <li>
            Personal information such as your name, email address, phone number,
            mailing address.
          </li>
        </ul>
        <XsmallHeading textTransform="normal">
          b. Automatically Collected Information:
        </XsmallHeading>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Device information, including IP address, browser type, operating
            system, and device identifiers.
          </li>
          <li>
            Usage data, such as pages visited, links clicked, and time spent on
            our Services.
          </li>
        </ul>
        <XsmallHeading textTransform="normal">
          c. Information from Third Parties:
        </XsmallHeading>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            Information obtained from social media platforms, payment
            processors, or other third parties when you interact with our
            Services through those platforms.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize" >3. How We Use Your Information</SmallHeading>

        <ul className="list-disc pl-6 text-gray-700">
          <li>Provide, operate, and improve our Services.</li>
          <li>
            Communicate with you, including sending updates, promotional
            materials, and customer service responses.
          </li>
          <li>
            Personalize your experience and deliver content tailored to your
            interests.
          </li>
          <li>Ensure the security and integrity of our Services.</li>
          <li>
            Comply with legal obligations and enforce our terms of service.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize" >4. Information Sharing</SmallHeading>
        <p className="text-gray-700 font-montserrat text-base leading-relaxed">
          We do not sell your personal information. However, we may share your
          information with:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Service Providers:</strong> Third-party vendors who assist
            us with operating our Services, such as hosting
            providers, and analytics services.
          </li>
          <li>
            <strong>Business Transfers:</strong> In connection with a merger,
            sale, or acquisition of our company.
          </li>
          <li>
            <strong>Legal Obligations:</strong> To comply with applicable laws,
            regulations, or legal processes.
          </li>
          <li>
            <strong>With Your Consent:</strong> When you explicitly agree to
            share your information.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize" >5. Your Rights and Choices</SmallHeading>
        <p className="text-gray-700 font-montserrat text-base leading-relaxed">
          Depending on your location, you may have the following rights
          regarding your personal information:
        </p>
        <ul className="list-disc pl-6 text-gray-700 font-montserrat text-base">
          <li>Access: Request a copy of the information we hold about you.</li>
          <li>Correction: Request corrections to your personal information.</li>
          <li>Deletion: Request that we delete your personal information.</li>
          <li>
            Data Portability: Request a copy of your information in a portable
            format.
          </li>
          <li>
            Opt-Out: Manage your preferences for receiving promotional
            communications.
          </li>
        </ul>
        <p className="text-gray-700 font-montserrat text-base leading-relaxed mt-2">
          To exercise these rights, please contact us at [Insert Contact
          Information].
        </p>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize" >6. Data Security</SmallHeading>
        <p className="text-gray-700 font-montserrat text-base leading-relaxed">
          We implement reasonable security measures to protect your personal
          information. However, no method of transmission over the internet or
          electronic storage is 100% secure. Therefore, we cannot guarantee
          absolute security.
        </p>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize">7. Retention of Information</SmallHeading>
        <p className="text-gray-700 font-montserrat text-base leading-relaxed">
          We retain your personal information only for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law.
        </p>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize">8. Third-Party Links</SmallHeading>
        <p className="text-gray-700">
          Our Services may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these third-party
          sites. We encourage you to read their privacy policies before
          providing any personal information.
        </p>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize">9. Children’s Privacy</SmallHeading>
        <p className="text-gray-700 font-montserrat text-base leading-relaxed">
          Our Services are not directed at children under the age of 13, and we
          do not knowingly collect personal information from children. If we
          become aware that we have collected information from a child under 13,
          we will take steps to delete such information.
        </p>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize">
          10. Changes to This Privacy Policy
        </SmallHeading>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. When we make
          changes, we will revise the “Effective Date” at the top of this
          policy. We encourage you to review this Privacy Policy periodically to
          stay informed about our practices.
        </p>
      </section>

      <section className="mb-6">
        <SmallHeading textTransform="capitalize">11. Contact Us</SmallHeading>
        <p className="text-gray-700 font-montserrat text-base leading-relaxed">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at:
        </p>
        <address className="text-gray-700 font-montserrat text-base leading-relaxed">
          {/* Pettro
          <br />
         Fansesco
          <br /> */}
          Email: pettro92001@gmail.com
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
