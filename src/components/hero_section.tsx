import Button from "./button";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div id="hero_section" className="hero flex">
      {/* hero-section-container */}
      <div className="hero-section-container">
        {/* left-text */}
        <div className="left-text">
          <p>Welcome</p>
          <h1>
            Best Learning <br /> Opportunities
          </h1>
          <p>
            Our goal is to make online <br /> education work for everyone
          </p>
          {/* buttons */}
          <div className="hero-btn flex">
            <Button text="Join Us" type="secondary" />
            <Button text="Learn More" type="third" />
          </div>
        </div>
        {/* right-image */}
        <div className="right-image">
          <Image
            src="/hero-cover.png"
            alt="hero-image"
            width={680}
            height={680}
            className="img"
          />
        </div>
      </div>
    </div>
  );
}
