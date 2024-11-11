"use client";
import Link from "next/link";
import Button from "./button";
import { FaArrowRight } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header flex">
        <div className="container flex">
          <div className="nav-icon-container flex">
            {/* Logo */}
            <h1 className="logo">EduNest</h1>

            {/* Desktop Nav Links */}
            <nav className="desktop-nav">
              <ul className="flex">
                <li>
                  <Link className="nav-link" href="#hero_section">
                    Home
                  </Link>
                  <Link className="nav-link" href="#product_section">
                    Product
                  </Link>
                  <Link className="nav-link" href="#price_section">
                    Pricing
                  </Link>
                  <Link className="nav-link" href="#contact_section">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="hamburger-icon open" onClick={toggleMenu}>
            {isMenuOpen ? "" : <FaBars />}
          </div>

          {/* Desktop Buttons */}
          <div className="nav-buttons flex">
            <Button text="Login" type="primary" />
            <div className="button-secondary flex">
              <Button text="JOIN US" type="secondary" />
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="hamburger-icon close" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : ""}
        </div>
        <nav>
          <ul className="mobile-ul">
            <li>
              <Link
                className="nav-link"
                href="#hero_section"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="#product_section"
                onClick={toggleMenu}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="#price_section"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                href="#contact_section"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="mobile-nav-buttons flex">
          <Button text="Login" type="primary" />
          <div className="button-secondary flex">
            <Button text="JOIN US" type="secondary" />
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
