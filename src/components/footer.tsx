import Social_icons from "./social_icons";

export default function Footer() {
  return (
    <footer className="flex">
      {/* footer-container */}
      <div className="flex footer-container">
        <p>Made With Love By Figmaland All Right Reserved </p>
        {/* social-icons */}
        <div className="icons-container1">
          <Social_icons />
        </div>
      </div>
    </footer>
  );
}
