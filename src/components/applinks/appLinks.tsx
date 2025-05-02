"use client";

import React,{useEffect} from "react";
import DropdownMenu from "./dropdown";
import { birdsLinks, catsLinks, dogsLinks, horsesLinks,} from "../links";
// import { birdsLinks, catsLinks, dogsLinks, horsesLinks, maintenance, productsLinks, smallPetsLinks, Toys } from "../links";
import { useDispatch } from "react-redux";
import { fetchcategories } from "@/redux/features/linksAction";
import { AppDispatch } from "@/redux/store";
// import { RootState } from "@/redux/store";

const AppLinks = () => {
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch<AppDispatch>()
  // const { items, loading, error } = useSelector((state:RootState) => state.links);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchcategories())
    };
    fetchData();
  }, [dispatch]);



  return (
    <div className="hidden md:flex flex-wrap items-center justify-center mt-2 mb-2 border-b border-gray-300
    gap-24
    md:gap-6 
    lg:gap-16
    xl:gap-24
     ">
      
            <DropdownMenu title="Dogs" links={dogsLinks} />
            <DropdownMenu title="Cats" links={catsLinks} />
            <DropdownMenu title="Birds" links={birdsLinks} />
            {/* <DropdownMenu title="Small Pets" links={smallPetsLinks} /> */}
            <DropdownMenu title="Horses" links={horsesLinks} />
            {/* <DropdownMenu title="Pet Products" links={productsLinks} />
            <DropdownMenu title="Living space maintenance" links={maintenance} />
            <DropdownMenu title="Toys" links={Toys} /> */}
    </div>
  );
};

export default AppLinks;
