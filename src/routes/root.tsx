import Hero from "../components/hero";
import HomeImg from "../assets/home-img.png";

export default function Root() {
  const HERO_PHRASE = "Chez vous, partout et ailleurs";

  return <Hero img={HomeImg} phrase={HERO_PHRASE} />;
}
