import React, { useRef, useContext } from 'react';
import logo from '../../assets/images/logo.png';
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/doctors',
    display: 'Consult a Doctor',
    disabledFor: 'doctor' // Adding a property to specify the role that disables this link
  },
  {
    path: '/contact',
    display: 'Contact'
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header flex items-center bg-gray-300">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* =================== logo =============*/}
          <div>
            <Link to="/home"> {/* Wrap the logo with Link component */}
              <img src={logo} alt="" />
            </Link>
          </div>

          {/* ======== menu =============*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {link.disabledFor === role ? (
                    <span className="text-gray-400">{link.display}</span> // Disable the link
                  ) : (
                    <NavLink
                      to={link.path}
                      className={navClass =>
                        navClass.isActive
                          ? "text-primaryColor text-[16px] leading-7 font-[600]"
                          : "text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor"
                      }
                    >
                      {link.display}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ======== nav right =============*/}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex items-center gap-2">
                <figure className="w-[50px] h-[50px] rounded-full cursor-pointer">
                  <img src={user?.photo} className="w-full rounded-full" alt="" />
                </figure>
                <Link
                  to={role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}
                  className="text-textColor text-lg font-[600] hover:text-primaryColor"
                >
                  {user?.name}
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login/Signup
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
