import Link from 'next/link';

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <li>
    <Link href={href} className="text-xl font-base font-montserrat hover:text-red-500 uppercase">
      {text}
    </Link>
  </li>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-6">
        {/* Links in a row */}
        <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <FooterLink href="/terms-of-use" text="Terms of Use" />
          <FooterLink href="/privacy-policy" text="Privacy Policy" />
          <FooterLink href="/contact-us" text="Contact Us" />
          <FooterLink href="/about-us" text="About Us" />
        </ul>
        {/* Rights Reserved */}
        <div className="text-center">
          <p className="text-sm text-gray-700">&copy; {new Date().getFullYear()} Pettro. All Rights Reserved. Our content and services are for informational purposes only. Pettro does not provide medical, legal, or financial advice, diagnosis, or treatment..</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
