import Banner from "@/components/Home/Banner";
import Brands from "@/components/Home/Brands";
import FAQ from "@/components/Home/FAQ";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import NewArrivals from "@/components/Home/NewArrivals";
import Newsletter from "@/components/Home/Newsletter";
import Testimonials from "@/components/Home/Testimonials";


export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <div className="px-6 xl:px-0">
        <NewArrivals />
        <FeaturedCategories />
        <Brands />
        <Testimonials />
        <FAQ />
      </div>
      <Newsletter />
    </div>
  );
}
