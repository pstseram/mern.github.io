import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    path: "https://www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-black w-4 h-6" />,
  },
  {
    path: "https://facebook.com",
    icon: <AiFillFacebook className="group-hover:text-black w-4 h-6" />,
  },
  {
    path: "https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-black w-4 h-6" />,
  },
  {
    path: "https://www.linkedin.com",
    icon: <RiLinkedinFill className="group-hover:text-black w-4 h-6" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/contact",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const quickLinks02 = [
  {
    path: "/Doctors",
    display: "Find a Doctor",
  },
  {
    path: "/Doctors",
    display: "View Doctors",
  },
  {
    path: "/Contact",
    display: "Go to contacts",
  },
];

const contactInfo = {
  location: "Kathal Point,Silchar",
  phoneNumber: "+91-9774698328",
  email: "info@doctrustcare.com",
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10 bg-gradient-to-r text-black">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright© {year} developed for the Project. All rights reserved.
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className='w-9 h-9 border border-solid 
                  border-[#181A1E] rounded-full flex items-center
                  justify-center group hover:bg-primaryColor hover:border-none'>
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link
                    to={item.path}
                    className='text-[16px] leading-7 font-sans[400] text-textColor'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-sans[400] text-textColor'>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>
              Contact Us
            </h2>
            <ul>
              <li className='mb-4 flex items-center'>
                <FaMapMarkerAlt className='text-[16px] leading-7 text-textColor mr-2' />
                <p className='text-[16px] leading-7 font-sans[400] text-textColor'>{contactInfo.location}</p>
              </li>
              <li className='mb-4 flex items-center'>
                <FaPhoneAlt className='text-[16px] leading-7 text-textColor mr-2' />
                <p className='text-[16px] leading-7 font-sans[400] text-textColor'>{contactInfo.phoneNumber}</p>
              </li>
              <li className='mb-4 flex items-center'>
                <FaEnvelope className='text-[16px] leading-7 text-textColor mr-2' />
                <p className='text-[16px] leading-7 font-sans[400] text-textColor'>{contactInfo.email}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
