import HeroBanner from "../components/hero-banner";
import HomeImg from "../assets/home-img.png";

export default function Root() {
  const HERO_PHRASE = "Chez vous, partout et ailleurs";

  return <HeroBanner img={HomeImg} phrase={HERO_PHRASE} />;
}
