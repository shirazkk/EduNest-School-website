import Image from "next/image";
import Button from "./button";
import { IoIosArrowForward } from "react-icons/io";

export default function Second_product() {
  return (
    <section className="section-two flex">
      <div className="section-two-container flex">
        {/* left-img */}
        <div className="left-girl-img flex">
          <Image
            src="/girl-img.png"
            alt="girl-imgage"
            width={530}
            height={530}
            className="img-girl"
          />
        </div>
        {/* right-text */}
        <div className="one-left-text flex">
          {/* red-line */}
          <div className="red-line"></div>
          <h1>
            Video in Live <br />
            Action
          </h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          {/* button */}
          <div className="flex button-primary ">
            <Button text="Learn More" />
            <IoIosArrowForward className="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
}
