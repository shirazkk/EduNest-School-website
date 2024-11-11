import Button from "./button";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function Product() {
  return (
    <section id="product_section" className="section-one flex">
      {/* section-one-container */}
      <div className="section-one-container flex">
        {/* left-text */}
        <div className="one-left-text flex">
          {/* red-line */}
          <div className="red-line"></div>
          <h1>Approdable Packages</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          {/* button */}
          <div className="flex button-primary ">
            <Button text="Learn More" />
            <IoIosArrowForward className="arrow" />
          </div>
        </div>
        {/* right-product */}
        <div className="right-product-box flex">
          {/* box1 */}
          <div className="box flex">
            <Image
              src="/product2-img.svg"
              alt="product2-img"
              width={80}
              height={80}
            />
            <h3>Certified Teacher</h3>
            <div className="red-line2"></div>
            <p>The gradual accumulation of information about </p>
          </div>
          {/* box2 */}
          <div className="box flex">
            <Image
              src="/product1-img.svg"
              alt="product1-img"
              width={80}
              height={80}
            />
            <h3>Certified Teacher</h3>
            <div className="red-line2"></div>
            <p>The gradual accumulation of information about </p>
          </div>
        </div>
      </div>
    </section>
  );
}
