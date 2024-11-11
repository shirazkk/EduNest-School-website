
import Card from "@/components/card_section";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FooterLinks from "@/components/footer_links";
import HeroSection from "@/components/hero_section";
import NavBar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Product from "@/components/product";
import Reviews from "@/components/reviews";
import Second_product from "@/components/second_product";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <HeroSection/>
      <Product/>
      <Second_product/>
      <Pricing/>
      <Reviews/>
      <Card/>
      <Contact/>
      <FooterLinks/>
      <Footer/>
    </div>
  );
}
