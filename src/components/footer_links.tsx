import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function FooterLinks() {
  return (
    <section className="section-seven flex">
      {/* section-seven-container */}
      <div className="section-seven-container flex">
        {/* rows-links */}
        <div className=" row-links flex">
          <h4>Company Info</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className=" row-links flex">
          <h4>Legal</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className=" row-links flex">
          <h4>Features</h4>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
        <div className=" row-links flex">
          <h4>Resources</h4>
          <p>IOS & Android</p>
          <p>Watch a Demo</p>
          <p>Customers</p>
          <p>API</p>
        </div>
        <div className=" row-links contact-link flex">
          <h4>Get In Touch</h4>
          <div className="flex flex2">
            <FaPhone className="contact-icons" />
            <p>(480) 555-0103</p>
          </div>
          <div className="flex flex2">
            <FaLocationDot className="contact-icons" />
            <p>
              4517 Washington Ave. Manchester, <br /> Kentucky 39495
            </p>
          </div>
          <div className="flex flex2">
            <MdEmail className="contact-icons" />
            <p>debra.holt@example.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
