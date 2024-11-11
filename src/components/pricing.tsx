import Image from "next/image";
import { IoIosStarOutline } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { IoMdStopwatch } from "react-icons/io";
import { FaBookOpenReader } from "react-icons/fa6";
import { BsGraphUp } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Button from "./button";

export default function Pricing() {
  return (
    <section id="price_section" className="section-three flex">
      {/* section-three-container */}
      <div className="section-three-container flex">
        {/* row1 */}
        <div className="second-left-text flex">
          <p>Practice Advice</p>
          <h1>Approdable Packages</h1>
          <p>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* row2 */}
        <div className="row2">
          {/* price-box1 */}
          <div className="price-box ">
            {/* left-img */}
            <div className="price-box-img1 ">
              <Image
                src="/price_section/price-box-img1.png"
                alt="price-box-img1"
                width={270}
                height={480}
              />
              <div className="inside-item-sale">Sale</div>
              {/* icons */}
              <div className="insite-item-icons flex">
                <div className="inside-icon flex">
                  <CiHeart />
                </div>
                <div className="inside-icon flex">
                  <MdOutlineShoppingCart />{" "}
                </div>
                <div className="inside-icon1 flex">
                  <FaRegEye />
                </div>
              </div>
            </div>
            {/* right-text */}
            <div className="price-box-left-text">
              <div className="online-course flex">
                <p>2,769 online courses </p>
                <div className="flex rating-box">
                  {/* star and rating */}
                  <IoIosStarOutline className="star" />
                  <p>4.9</p>
                </div>
              </div>
              <h3>Watch our Courses</h3>
              <p>
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              {/* download-icon  */}
              <div className="sales-download">
                <BsDownload />
                <p>15 Sales</p>
              </div>
              <div className="price-in-dollar flex">
                <p>$16.48</p>
                <p>$6.48</p>
              </div>

              <div className="flex price-icons">
                <IoMdStopwatch className="h hour" />
                <p>22h...</p>
                <FaBookOpenReader className="h lesson" />
                <p>64 Lessons</p>
                <BsGraphUp className="h graph" />
                <p>Progress</p>
              </div>
              <div className="flex price-btn">
                <Button text="Learn More" type="fourth" />
                <IoIosArrowForward className="arrow n" />
              </div>
            </div>
          </div>

          {/* price-box2 */}
          <div className="price-box ">
            {/* left-img */}
            <div className="price-box-img1 ">
              <Image
                src="/price_section/price-box-img.png"
                alt="price-box-img"
                width={270}
                height={480}
              />
              <div className="inside-item-sale">Sale</div>
              {/* icons */}
              <div className="insite-item-icons flex">
                <div className="inside-icon flex">
                  <CiHeart />
                </div>
                <div className="inside-icon flex">
                  <MdOutlineShoppingCart />{" "}
                </div>
                <div className="inside-icon1 flex">
                  <FaRegEye />
                </div>
              </div>
            </div>
            {/* right-text */}
            <div className="price-box-left-text">
              <div className="online-course flex">
                <p>2,769 online courses </p>
                <div className="flex rating-box">
                  {/* star and rating */}
                  <IoIosStarOutline className="star" />
                  <p>4.9</p>
                </div>
              </div>
              <h3>Watch our Courses</h3>
              <p>
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              {/* download-icon  */}
              <div className="sales-download">
                <BsDownload />
                <p>15 Sales</p>
              </div>
              <div className="price-in-dollar flex">
                <p>$16.48</p>
                <p>$6.48</p>
              </div>

              <div className="flex price-icons">
                <IoMdStopwatch className="h hour" />
                <p>22h...</p>
                <FaBookOpenReader className="h lesson" />
                <p>64 Lessons</p>
                <BsGraphUp className="h graph" />
                <p>Progress</p>
              </div>
              <div className="flex price-btn">
                <Button text="Learn More" type="fourth" />
                <IoIosArrowForward className="arrow n" />
              </div>
            </div>
          </div>

          {/* price-box3 */}

          <div className="price-box ">
            {/* left-img */}
            <div className="price-box-img1 ">
              <Image
                src="/price_section/price-box-img2.png"
                alt="price-box-img2"
                width={270}
                height={480}
              />
              <div className="inside-item-sale">Sale</div>
              {/* icons */}
              <div className="insite-item-icons flex">
                <div className="inside-icon flex">
                  <CiHeart />
                </div>
                <div className="inside-icon flex">
                  <MdOutlineShoppingCart />{" "}
                </div>
                <div className="inside-icon1 flex">
                  <FaRegEye />
                </div>
              </div>
            </div>
            {/* right-text */}
            <div className="price-box-left-text">
              <div className="online-course flex">
                <p>2,769 online courses </p>
                <div className="flex rating-box">
                  {/* star and rating */}
                  <IoIosStarOutline className="star" />
                  <p>4.9</p>
                </div>
              </div>
              <h3>Watch our Courses</h3>
              <p>
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              {/* download-icon  */}
              <div className="sales-download">
                <BsDownload />
                <p>15 Sales</p>
              </div>
              <div className="price-in-dollar flex">
                <p>$16.48</p>
                <p>$6.48</p>
              </div>

              <div className="flex price-icons">
                <IoMdStopwatch className="h hour" />
                <p>22h...</p>
                <FaBookOpenReader className="h lesson" />
                <p>64 Lessons</p>
                <BsGraphUp className="h graph" />
                <p>Progress</p>
              </div>
              <div className="flex price-btn">
                <Button text="Learn More" type="fourth" />
                <IoIosArrowForward className="arrow n" />
              </div>
            </div>
          </div>

          {/* price-box-4 */}

          <div className="price-box ">
            {/* left-img */}
            <div className="price-box-img1 ">
              <Image
                src="/price_section/price-box-img3.png"
                alt="price-box-img3"
                width={270}
                height={480}
              />
              <div className="inside-item-sale">Sale</div>
              {/* icons */}
              <div className="insite-item-icons flex">
                <div className="inside-icon flex">
                  <CiHeart />
                </div>
                <div className="inside-icon flex">
                  <MdOutlineShoppingCart />{" "}
                </div>
                <div className="inside-icon1 flex">
                  <FaRegEye />
                </div>
              </div>
            </div>
            {/* right-text */}
            <div className="price-box-left-text">
              <div className="online-course flex">
                <p>2,769 online courses </p>
                <div className="flex rating-box">
                  {/* star and rating */}
                  <IoIosStarOutline className="star" />
                  <p>4.9</p>
                </div>
              </div>
              <h3>Watch our Courses</h3>
              <p>
                We focus on ergonomics and meeting you where you work. It&apos;s
                only a keystroke away.
              </p>
              {/* download-icon  */}
              <div className="sales-download">
                <BsDownload />
                <p>15 Sales</p>
              </div>
              <div className="price-in-dollar flex">
                <p>$16.48</p>
                <p>$6.48</p>
              </div>

              <div className="flex price-icons">
                <IoMdStopwatch className="h hour" />
                <p>22h...</p>
                <FaBookOpenReader className="h lesson" />
                <p>64 Lessons</p>
                <BsGraphUp className="h graph" />
                <p>Progress</p>
              </div>
              <div className="flex price-btn">
                <Button text="Learn More" type="fourth" />
                <IoIosArrowForward className="arrow n" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
