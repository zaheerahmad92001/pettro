'use client'

import AccordionSection from "./AccordionSection";
import { birdsLinks, catsLinks, dogsLinks, horsesLinks, maintenance, productsLinks, smallPetsLinks, Toys } from "../links";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Menu = (props:MenuProps) => {
  const { isMenuOpen ,setIsMenuOpen } = props

  return (
    <>
      {isMenuOpen && (
        <div 
        style={{ minHeight: "calc(100vh - 100px)" }}
        className="absolute top-[100px] left-0 w-full  bg-white text-black shadow-md rounded-lg p-4 md:hidden">
          <ul className="list-none flex flex-col gap-4 m-0 p-0">
            <AccordionSection setIsMenuOpen={setIsMenuOpen} title="Dogs" links={dogsLinks} />
            <AccordionSection setIsMenuOpen={setIsMenuOpen} title="Cats" links={catsLinks} />
            <AccordionSection setIsMenuOpen={setIsMenuOpen} title="Birds" links={birdsLinks} />
            <AccordionSection setIsMenuOpen={setIsMenuOpen} title="Small Pets" links={smallPetsLinks} />
            <AccordionSection setIsMenuOpen={setIsMenuOpen} title="Horses" links={horsesLinks} />
            <AccordionSection setIsMenuOpen={setIsMenuOpen} title="Pet Products" links={productsLinks} />
            <AccordionSection setIsMenuOpen={setIsMenuOpen} title="Living space maintenance" links={maintenance} />
            <AccordionSection setIsMenuOpen={setIsMenuOpen} title="Toys" links={Toys} />
            
          </ul>
        </div>
      )}
    </>
  );
};

export default Menu;
