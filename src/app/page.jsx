import Banner from "@/components/Home/Banner";
import Brands from "@/components/Home/Brands";
import FeaturedCategories from "@/components/Home/FeaturedCategories";
import NewArrivals from "@/components/Home/NewArrivals";
import Newsletter from "@/components/Home/Newsletter";


export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <div className="px-6 xl:px-0">
        <NewArrivals />
        <FeaturedCategories />
        <Brands />
      </div>
      <Newsletter />
    </div>
  );
}
