import { BaseHeading, SmallHeading } from "@/components/heading";
import { generatePageMetadata } from "@/components/seo";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Use | Pettro - Guidelines for Using Our Pet Care Platform",
  description: "Review Pettro’s Terms of Use to understand your rights and responsibilities when accessing our pet care website and services. Your trust and safety matter to us.",
  keywords:[`Pettro terms of use, user agreement, pet care platform rules, website terms, service agreement, user responsibilities, platform guidelines, acceptable use policy`],
  slug: "/terms-of-use",
  image: "/pettro-img.png",
});

const TermsOfUse = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <BaseHeading textTransform="capitalize" >Terms of Use</BaseHeading>


      <div className="space-y-8 mt-12 text-black font-geistMono">
        <section>
          <SmallHeading textTransform="capitalize">1. Acceptance of Terms</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            By accessing or using our Services, you represent that you are at least 18 years old or have the legal authority to enter into these Terms. If you are using our Services on behalf of an organization, you agree to these Terms on behalf of that organization.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">2. Use of Services</SmallHeading>
          <ul className="list-disc pl-6 text-gray-700 font-montserrat text-base leading-relaxed">
            <li>Use our Services only for lawful purposes and in compliance with applicable laws and regulations.</li>
            <li>Do not transmit, distribute, or store any material that is harmful, defamatory, or objectionable.</li>
            <li>Do not interfere with the security or performance of our Services.</li>
            <li>Do not attempt to gain unauthorized access to any part of our Services.</li>
          </ul>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">3. User Accounts</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            To access certain features of our Services, you may need to create an account. You agree to provide accurate information, keep your credentials secure, and notify us of any unauthorized access.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">4. Intellectual Property</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            All content, trademarks, logos, and other intellectual property are owned by Pettro or its licensors. You may not copy, reproduce, or create derivative works without written consent.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">5. Third-Party Links and Services</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            Our Services may include links to third-party websites or services. Pettro is not responsible for their content, policies, or practices. You access them at your own risk.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">6. Limitation of Liability</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            Pettro and its affiliates will not be liable for any indirect, incidental, or punitive damages arising out of your use of the Services. Total liability is limited to the amount you paid for the Services in the past 12 months, if any.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">7. Disclaimer of Warranties</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            Our Services are provided `as is` without warranties of any kind. We do not guarantee error-free or uninterrupted Services.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">8. Indemnification</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            You agree to indemnify Pettro from any claims or damages arising from your use of the Services, violation of these Terms, or infringement of third-party rights.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">9. Changes to Terms</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            We reserve the right to update these Terms at any time. Changes will be effective upon posting. Continued use of the Services constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">10. Termination</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            We may suspend or terminate your access to our Services for any reason. Upon termination, your right to use the Services will cease immediately.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">11. Governing Law and Dispute Resolution</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            These Terms are governed by the laws of [Your Jurisdiction]. Disputes will be resolved through binding arbitration or the courts of [Your Jurisdiction].
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">12. Contact Us</SmallHeading>
          <p className="text-gray-700 font-montserrat text-base leading-relaxed">
            If you have any questions, contact us at:
          </p>
          <address className="not-italic text-gray-700 font-montserrat text-base leading-relaxed">
            {/* Pettro<br />
            Francissco<br /> */}
            Email: pettro92001@gmail.com<br />
          </address>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
