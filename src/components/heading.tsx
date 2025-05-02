'use client'
import Link from 'next/link';
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


interface HeadingProps {
  children?: React.ReactNode;
  textPosition?: string;
  title?:string;
  textTransform?: string;
  category?:string;
  url?:string;
  marginBottom?:string;
  marginTop?:string

}

const Heading: React.FC<HeadingProps> = ({ children }) => (
  <h1 className="font-bold text-black font-montserrat text-center uppercase mb-3 
      text-xl sm:text-2xl md:text-3xl lg:text-4xl">
    {children}
  </h1>
);


const LargeHeading: React.FC<HeadingProps> = ({ children, textPosition = 'start' , textTransform = 'capitalize',marginBottom ='3',marginTop='0'  }) => {
  return (
    <h1 className={`font-bold text-[#0f172a] font-montserrat text-${textPosition} ${textTransform} mb-${marginBottom} mt-${marginTop}
      text-2xl sm:text-2xl md:text-3xl lg:text-4xl`   
      }>
      {children}
    </h1>
  );
};

const BaseHeading: React.FC<HeadingProps> = ({ children, textPosition = 'start' , textTransform = 'capitalize',marginBottom ='3',marginTop='0'  }) => {
  return (
    <h1 className={`font-base text-black font-montserrat text-${textPosition} ${textTransform} mb-${marginBottom} mt-${marginTop}
      text-2xl sm:text-2xl md:text-2xl lg:text-3xl`}>
      {children}
    </h1>
  );
};

const SmallHeading: React.FC<HeadingProps> = ({ children, textPosition = 'start' , textTransform = 'uppercase' }) => {
  return (
    <h1 className={`font-medium text-black font-montserrat text-${textPosition} ${textTransform} mb-3
      text-xl`}>
      {children}
    </h1>
  );
};

const XsmallHeading: React.FC<HeadingProps> = ({ children, textPosition = 'start' , textTransform = 'uppercase' }) => {
  return (
    <h1 className={`font-base text-black font-montserrat text-${textPosition} ${textTransform} mb-1 mt-4
      text-lg`}>
      {children}
    </h1>
  );
};

const handleOnclick=()=>{}

const ViewAllHeading:React.FC<HeadingProps>=(props)=>{
  const {title , category , url} = props

  const product = {
    category: category,
    url,
    title:title,
  };
  
  // Convert category and title to a slug format
  const formattedCategory = product?.category?.toLowerCase().replace(/\s+/g, "-"); 
  const formattedURL = product?.url?.toLowerCase().replace(/\s+/g, "-"); 
  // const formattedSlug = product?.title?.toLowerCase().replace(/\s+/g, "-");
  console.log('formattedSubCategory',formattedURL)
    return(
      <div className='hidden md:flex justify-center itemms-center mb-4'>
        <div className="hidden md:flex justify-between items-center group text-black ">
        <Link href={`/view-all/${formattedCategory}/${formattedURL}`}>  
        <button 
          onClick={handleOnclick}
          className="flex flex-row justify-between items-center gap-1 group-hover:text-red-500 transition-colors duration-100">
          <h1 className="font-semibold font-montserrat text-2xl border-b border-red-500 border-b-2 capitalize">
            {title}
          </h1>
          <FaLongArrowAltRight className="font-base font-montserrat text-2xl" />
          </button>
          </Link>
        </div>
        </div>
    )
}

export {Heading ,BaseHeading ,LargeHeading, SmallHeading,XsmallHeading,ViewAllHeading};
