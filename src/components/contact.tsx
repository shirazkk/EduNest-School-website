import Button from "./button";

export default function Contact() {
  return (
    <section id="contact_section" className="section-six flex">
      {/* section-six-container */}
      <div className="section-six-container flex">
        <div className="second-left-text1 flex">
          <p>Newsletter</p>
          <h1>Watch our Courses</h1>
          <p>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* contact-form */}
        <form className="flex form">
          <input type="email" placeholder="Your Email" />
          <div className="subscribe">
            <Button text="Subscribe" type="secondary" />
          </div>
        </form>
      </div>
    </section>
  );
}
