import { React } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons"; ``
import styles from "../component/Navbar.module.css";

const Navbar = () => {

  return (
    <>

      <nav className={` ${styles.navbarbg} sm:justify-center flex  text-white items-center justify-between p-2 w-full h-11 sticky top-0 left-0  z-20 gap-10`}>
        <div>
          <Link to="/">
            <FontAwesomeIcon
              icon={faApple}
              className=" sm:text-lg text-2xl cursor-pointer sm:float-right sm:pb-1"
            />
          </Link>
        </div>


        <div className={`${styles.hhh}  text-gray-200  hidden  sm:flex items-center gap-10 text-[12px] font-light `} >
          <Link to="/store" className=" hover:text-white" > Store </Link>
          <Link to="/mac" className=" hover:text-white"> Mac </Link>
          <Link to="/ipad" className=" hover:text-white" > iPad </Link>
          <Link to="/iphone" className=" hover:text-white" > iPhone </Link>
          <Link to="/watch" className=" hover:text-white" > Watch </Link>
          <Link to="/airpods" className=" hover:text-white" > Airpods </Link>
          <Link to="/tvandhome" className=" hover:text-white" > TV & Home </Link>
          <Link to="/entertainment" className=" hover:text-white" > Entertainment </Link>
          <Link to="/accessories" className=" hover:text-white" > Accessories </Link>
          <Link to="/support" className=" hover:text-white" > Support </Link>
        </div>


        <div className=" flex items-center justify-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="mr-7 sm:text-sm cursor-pointer"
          />
          <FontAwesomeIcon
            icon={faBagShopping}
            className=" ml-3 mr-7 sm:text-sm cursor-pointer sm:mr-0"
          />
          <FontAwesomeIcon
            icon={faBars}
            className="mr-1 cursor-pointer block sm:invisible"
          />
        </div>

      </nav>
    </>
  );
};

export default Navbar;
