import { assets } from "../../assets/Assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex md:flex-row text-center flex-col md:justify-around mx-auto w-[90vw] md:gap-8 mt-8 space-y-6 p-4 justify-center text-gray-700">
        <div className="md:w-1/3 w-full">
          <img src={assets.logo} alt="Logo" className="mb-4 max-w-10 mx-auto" />
          <p className="md:text-left text-[14px]">
            The site is a user-friendly platform that allows patients to book
            appointments with doctors from various medical fields, such as
            cardiology, dermatology, and more. Users can search for specialists,
            view available time slots, and schedule consultations with ease.
            Additionally, the platform provides a secure space for patients to
            upload and manage their health reports, enabling doctors to review
            them before appointments, ensuring personalized and efficient care.
          </p>
        </div>
        <div className="md:w-1/3 flex-start w-full md:text-left text-lg flex flex-col gap-2 text-left md:ml-4 ">
          <h1 className="font-bold uppercase text-black">Company</h1>
          <Link
            className="hover:text-neutral-900/50 w-fit transition-all"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-neutral-900/50 w-fit transition-all"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-neutral-900/50 w-fit transition-all"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="md:w-1/3 mx-auto md:text-left w-full text-xs flex flex-col gap-2 text-left">
          <h1 className="font-bold uppercase text-lg text-black">
            Get in touch
          </h1>
          <Link
            className="hover:text-neutral-900/50 w-fit transition-all"
            to=""
          >
            +977 9800000000
          </Link>
          <a
            className="hover:text-neutral-900/50 w-fit transition-all"
            href="mailto: ghimiresushank64@gmail.com"
          >
            ghimiresushank64@gmail.com
          </a>
        </div>
      </footer>
      <hr className="bg-gray-200 h-[2px]" />
      <div className="text-center mt-4 font-bold pb-8 text-sm">
        Copyright 2024 @ sushank ghimire - All Right Reserved.
      </div>
    </>
  );
};

export default Footer;
