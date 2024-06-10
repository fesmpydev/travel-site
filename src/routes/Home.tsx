import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Faqs from "../components/sections/Faqs";
import Recomendation from "../components/sections/Recomendation";
import Trending from "../components/sections/Trending";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Recomendation />
      <Trending />
      <Faqs />
      <Footer />
    </>
  );
}
