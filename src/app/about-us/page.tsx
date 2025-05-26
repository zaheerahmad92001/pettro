import { BaseHeading, SmallHeading } from "@/components/heading";
import { generatePageMetadata } from "@/components/seo";
import { Metadata } from "next";
import React from "react";



export const metadata: Metadata = generatePageMetadata({
  title: "About Pettro | Your Trusted Source for Pet Care, Health & Wellness",
  description: "Discover Pettro your dedicated partner in pet care, health, and wellness. Learn about our mission, values, and commitment to supporting pet lovers and professionals worldwide.",
  keywords:['Pettro, about Pettro, pet care company, pet wellness, pet health experts, who we are Pettro, pet care mission, pet professionals, pet lover support'],
  slug: "/about-us",
  image: "/pettro-img.png",
});


const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      
        <BaseHeading textTransform="uppercase">
          Welcome to Pettro!
        </BaseHeading>

<div className="space-y-8 mt-12">
        <SmallHeading textTransform="capitalize">About Us</SmallHeading>
        <p className="text-base text-gray-700 font-montserrat leading-relaxed mb-8">
          At BTS (ByteTechSolution), we are a cutting-edge software company
          committed to delivering exceptional software solutions. Specializing
          in veterinary practice management, we offer innovative and tailored
          software services to help streamline operations, enhance efficiency,
          and provide unparalleled excellence in the veterinary industry. Our
          goal is to empower businesses with the technology they need to thrive.
        </p>

        <p className="text-base text-gray-700 font-montserrat leading-relaxed mb-8">
          At Pettro, we are passionate about helping you take the best care of
          your furry, feathery, or scaly friends. Whether you’re a first-time
          pet owner or a seasoned pet parent, our mission is to provide you with
          reliable and easy-to-understand information about pets. We believe
          that pets are not just animals but cherished members of the family,
          and we’re here to make your journey with them as joyful and fulfilling
          as possible.
        </p>

        <section className="mb-12">
          <SmallHeading textTransform="capitalize">What We Do</SmallHeading>
          <ul className="list-disc text-gray-700 font-montserrat list-inside space-y-4">
            <li>
              <strong>Pet Breeds:</strong> Learn about different breeds of pets
              with detailed profiles to help you find the perfect match.
            </li>
            <li>
              <strong>Health Tips:</strong> Comprehensive guides on preventive
              care, common health issues, and first-aid advice for pets.
            </li>
            <li>
              <strong>Food Recommendations:</strong> Tailored nutrition tips,
              special diets, and homemade treat ideas for your pets.
            </li>
            <li>
              <strong>Toys and Accessories:</strong> Discover fun and safe toys,
              interactive gadgets, and essential pet accessories.
            </li>
            <li>
              <strong>Home and Cleaning Advice:</strong> Practical tips on
              creating a pet-friendly home and keeping it clean.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <SmallHeading textTransform="capitalize">Why Choose Us?</SmallHeading>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-gray-700 font-montserrat">
              <strong>Easy-to-Read Content:</strong> Simple, actionable steps to
              make pet care easy and effective.
            </li>
            <li className="text-gray-700 font-montserrat">
              <strong>Trusted Information:</strong> Expert-curated and reliable
              advice for your pet’s well-being.
            </li>
            <li className="text-gray-700 font-montserrat">
              <strong>All-in-One Platform:</strong> Everything you need about
              pet care in one place.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <SmallHeading textTransform="capitalize">Our Story</SmallHeading>
          <p className="text-base text-gray-700 font-montserrat leading-relaxed mb-4">
            Pettro was born out of a deep love for animals and a desire to
            create a resource that pet owners can trust. Our team consists of
            pet enthusiasts, veterinary consultants, and writers who share a
            common goal: to improve the lives of pets and their owners.
          </p>
        </section>

        <section className="mb-12">
          <SmallHeading textTransform="capitalize">Our Vision</SmallHeading>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            We envision a world where every pet is loved, cared for, and
            thriving. Through our platform, we strive to educate and empower pet
            owners to make informed decisions that benefit their companions.
          </p>
        </section>

        <section>
          <SmallHeading textTransform="capitalize">Our Promise</SmallHeading>
          <p className="text-base leading-relaxed text-gray-700">
            We understand how much your pets mean to you because we’re pet
            lovers too! Our goal is to support you in making your pets’ lives as
            joyful and healthy as possible. Whether you’re looking for advice,
            product recommendations, or inspiration, we’re here to guide you
            every step of the way.
          </p>
        </section>

        <p className="text-base leading-relaxed mt-8 text-center text-gray-700 font-montserrat">
          Thank you for choosing Pettro. Let’s work together to create a happier
          world for pets and their families!
        </p>
      </div>
      </div>
  );
};

export default AboutUs;
