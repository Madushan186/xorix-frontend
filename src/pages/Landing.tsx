import { Banner, CategoriesSection, HomeCollectionSection } from "../components";
import MissionVision from "../components/MissionVision";

const Landing = () => {
  return (
    <>
      {/* Main Hero Banner */}
      <Banner />

      {/* Our Mission & Vision Section */}
      <MissionVision />

      {/* Featured Collection Section */}
      <HomeCollectionSection />

      {/* Categories Section */}
      <CategoriesSection />
    </>
  );
};

export default Landing;
