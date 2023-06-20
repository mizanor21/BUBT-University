import React from "react";
import logo from "../../../assets/images/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black font-thin text-white">
      <div>
        <img className="w-80" src={logo} alt="" />
        <p>
          Kingstar University.
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover">Branding</Link>
        <Link className="link link-hover">Design</Link>
        <Link className="link link-hover">Marketing</Link>
        <Link className="link link-hover">Advertisement</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
