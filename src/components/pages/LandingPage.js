import Header from "../Header";
import Hero from "../hero";
import TopSellers from "../topSellers";
import LiveAuction from "../liveAuction";
import Explore from "../explore";
import Footer from "../Footer";
import { RankBadge } from "../svg";
require("../styles/landingPage.scss");

const LandingPage = () => {
  return (
    <main className="landingPage">
      <Header />
      <Hero />
      <TopSellers />
      <LiveAuction />
      <Explore />
      <Footer />
    </main>
  );
};

export default LandingPage;
