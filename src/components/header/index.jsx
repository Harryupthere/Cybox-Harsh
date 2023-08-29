import React, { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import menus from "../../pages/menu";

import "./styles.scss";
import logo from "../../assets/images/logo/logo.png";
import Button from "../button";


import { useAccount, useDisconnect } from 'wagmi'

import { useWeb3Modal } from '@web3modal/react'





const Header = () => {








const { isConnected,address } = useAccount()

const { isOpen, open, close, setDefaultChain } = useWeb3Modal()



  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle activeIndex
  };

  const closeMobileMenu = () => {
    setMenuActive(false);
  };

  return (
    <>


    <header
      id="header_main"
      className={`header ${scroll ? "is-fixed" : ""} ${
        menuActive ? "mobile-menu-open" : ""
      }`}
    >
      <div className="container">
        <div id="site-header-inner">
          <div className="header__logo">
            <NavLink to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="Crybox" />
            </NavLink>
          </div>
          <nav
            id="main-nav"
            className={`main-nav ${menuActive ? "active" : ""}`}
          >
            <ul id="menu-primary-menu" className="menu">
              {menus.map((data, idx) => (
                <li
                  key={idx}
                  onClick={() => handleDropdown(idx)}
                  className={`menu-item ${
                    data.namesub ? "menu-item-has-children" : ""
                  } ${activeIndex === idx ? "active" : ""}`}
                >
                  <Link
                    to={data.links}
                    onClick={data.namesub ? null : closeMobileMenu}
                  >
                    {data.name}
                  </Link>
                  {data.namesub && (
                    <ul className="sub-menu">
                      {data.namesub.map((submenu) => (
                        <li key={submenu.id} className="menu-item">
                          <NavLink
                            to={submenu.links}
                            onClick={closeMobileMenu}
                          >
                            {submenu.sub}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          {/* <Button title="Connect Wallet" path="/" /> */}
          <button to="#" className="tf-button btn-effect">
            <span className="boder-fade"></span>
           
            <span className="effect" onClick={() => open()} >{isConnected ? `${address.substring(
              0,
              4
            )}....${address.substring(
              address.length - 4,
              address.length
            )}` : "Connect"}</span>

</button>

          {/* <Button
            style={{
              paddingTop: 20,
              paddingTopBottom: 20,
            }}
            title="Connect Wallet"
          /> */}

          <div
            className={`mobile-button ${menuActive ? "active" : ""}`}
            onClick={handleMenuActive}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  
    </>
  );
};

export default Header;
