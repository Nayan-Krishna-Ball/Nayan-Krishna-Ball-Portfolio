import Scroll from "../Components/Scroll";
import EditorialAbout from "../Editorial/EditorialAbout";
import EditorialContact from "../Editorial/EditorialContact";
import EditorialFooter from "../Editorial/EditorialFooter";
import EditorialNav from "../Editorial/EditorialNav";
import EditorialPage from "../Editorial/EditorialPage";
import EditorialProjects from "../Editorial/EditorialProjects";
import EditorialSkills from "../Editorial/EditorialSkills";
import BannerEditorial from "./Banner/BannerEditorial";

const LandingPage = () => {
  return (
    <EditorialPage>
      <Scroll />
      <EditorialNav />
      <BannerEditorial />
      <EditorialAbout />
      {/* <EditorialResume />  */}
      <EditorialSkills />
      <EditorialProjects />
      <EditorialContact />
      <EditorialFooter />
    </EditorialPage>
  );
};

export default LandingPage;
