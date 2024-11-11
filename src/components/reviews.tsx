import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
export default function Reviews() {
  return (
    <section className="section-four flex">
      {/* section-four-container */}
      <div className="section-four-container flex">
        {/* row1 */}
        <div className="second-left-text  flex">
          <p>Testimonials</p>
          <h1>Watch our Courses</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* row2 */}
        <div className="row2-reviews flex">
          {/* user-review-1 */}
          <div className="review flex">
            <Image
              src="/reviews_section/review2.png"
              alt="review-1"
              width={110}
              height={110}
              className="user-img"
            />
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="star-flex">
              <IoIosStarOutline className="star" />
              <IoIosStarOutline className="star" />
              <IoIosStarOutline className="star" />
              <IoIosStarOutline className="star" />
              <IoIosStarOutline className="star1" />
            </div>
            <h3>Regina Miles</h3>
            <p>Designer</p>
          </div>
          {/* user-review-2 */}
          <div className="review flex">
            <Image
              src="/reviews_section/review1.png"
              alt="review-2"
              width={110}
              height={110}
              className="user-img"
            />
            <p>
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </p>
            <div className="star-flex">
              <IoIosStarOutline className="star" />
              <IoIosStarOutline className="star" />
              <IoIosStarOutline className="star" />
              <IoIosStarOutline className="star" />
              <IoIosStarOutline className="star1" />
            </div>
            <h3>Mr Johnson</h3>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
