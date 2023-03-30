import React from "react";
import CompanyLogo from "../../images/logoCompany.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope, 
} from "@fortawesome/free-solid-svg-icons";
import { FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-900 mt-24 text-blue-500 shadow-2xl">
      <div className="box-container flex justify-between px-24 py-12">
        <div className="box flex flex-col">
          <h3 className="text-gray-300 text-2xl font-bold uppercase mb-2">
            locations
          </h3>
          <a href="#" className="text-light-color text-lg">
            Vietnamese
          </a>
          <a href="#" className="text-light-color text-lg">
            USA
          </a>
        </div>
        <div className="box flex flex-col">
          <h3 className="text-gray-300 text-2xl font-bold uppercase mb-2">
            quick links
          </h3>
          <a href="#home" className="text-light-color text-lg">
            home
          </a>
          <a href="#dishes" className="text-light-color text-lg">
            product
          </a>
          <a href="#about" className="text-light-color text-lg">
            about
          </a>
          <a href="#menu" className="text-light-color text-lg" id="menu">
            contact us
          </a>
        </div>
        <div className="box flex flex-col items-center">
          <h3 className="text-gray-300 text-2xl font-bold uppercase mb-2">
            contact info
          </h3>
          <a href="tel:+1234567890" className="text-light-color text-lg">
            +123-456-7890
          </a>
          <a href="tel:+1112223333" className="text-light-color text-lg">
            +111-222-3333
          </a>
          <a
            href="mailto:shaikhanas@gmail.com"
            className="text-light-color text-lg"
          >
            shaikhanas@gmail.com
          </a>
          <a
            href="mailto:anasbhai@gmail.com"
            className="text-light-color text-lg"
          >
            anasbhai@gmail.com
          </a>
          <a href="#" className="text-light-color text-lg">
            mumbai, india - 400104
          </a>
        </div>
        <div className="box flex flex-col items-start">
          <h3 className="text-gray-300 text-2xl font-bold uppercase mb-2">
            follow us
          </h3>
          <a
            href="#"
            className="text-light-color text-lg flex justify-center items-center"
          >
            <FaFacebook /> <span className="ml-2">FaceBook</span>
          </a>
          <a
            href="#"
            className="text-light-color text-lg flex justify-center items-center"
          >
            <FaInstagram /> <span className="ml-2">Instagram</span>
          </a>
          <a
            href="#"
            className="text-light-color text-lg flex justify-center items-center"
          >
            <FaTwitter /> <span className="ml-2">Twitter</span>
          </a>
          <a
            href="#"
            className="text-light-color text-lg flex justify-center items-center"
          >
            <FaLinkedin /> <span className="ml-2">Linkedin</span>
          </a>
        </div>
      </div>
      <div className="credit text-2xl text-gray-300 font-bold border-t-2 border-gray-400 pt-6 pb-2 flex justify-center items-center">
        copyright @ 2023 by
        <span className="text-green-500 ml-2 mr-4">CodeHire</span>
        <img
          src={CompanyLogo}
          alt="Company Logo"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Footer;