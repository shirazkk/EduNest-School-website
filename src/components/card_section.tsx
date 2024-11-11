import Image from "next/image";
import Social_icons from "./social_icons";
export default function Card() {
  return (
    <section className="section-five flex">
      {/* section-five-container */}
      <div className="section-five-container flex">
        {/* row1-text */}
        <div className="second-left-text new flex">
          <p>Team</p>
          <h1>Get Quality Education</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* row2-cards */}
        <div className="row2-cards flex">
          {/* card1 */}
          <div className="card">
            {/* card-img */}
            <div className="card-img">
              <Image
                src="/card_images/user-cover-1.png"
                alt="testimonial-1"
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
            {/* card-text */}
            <div className="card-text flex">
              <h3>Julian Jameson</h3>
              <p>Profession</p>
              {/* social-icons */}
              <div className="social-icons">
                <Social_icons />
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="card">
            {/* card-img */}
            <div className="card-img">
              <Image
                src="/card_images/user-cover-2.png"
                alt="testimonial-1"
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
            {/* card-text */}
            <div className="card-text flex">
              <h3>Julian Jameson</h3>
              <p>Profession</p>
              {/* social-icons */}
              <div className="social-icons">
                <Social_icons />
              </div>
            </div>
          </div>

          {/* card3 */}
          <div className="card">
            {/* card-img */}
            <div className="card-img">
              <Image
                src="/card_images/user-cover-3.png"
                alt="testimonial-1"
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
            {/* card-text */}
            <div className="card-text flex">
              <h3>Julian Jameson</h3>
              <p>Profession</p>
              {/* social-icons */}
              <div className="social-icons">
                <Social_icons />
              </div>
            </div>
          </div>

          <div className="card">
            {/* card-img */}
            <div className="card-img">
              <Image
                src="/card_images/user-cover-4.png"
                alt="testimonial-1"
                width={200}
                height={200}
                layout="responsive"
              />
            </div>
            {/* card-text */}
            <div className="card-text flex">
              <h3>Julian Jameson</h3>
              <p>Profession</p>
              {/* social-icons */}
              <div className="social-icons">
                <Social_icons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
