import HeroBanner from "../components/hero-banner";
import HomeImg from "../assets/home-img.png";
import { getLogements } from "../lib/utils";
import LogementCard from "../components/logement-card";

export default function Root() {
  const HERO_PHRASE = "Chez vous, partout et ailleurs";
  const logements = getLogements();

  return (
    <>
      <HeroBanner img={HomeImg} phrase={HERO_PHRASE} />
      <section className="p-4 sm:p-8 mb-4 sm:mb-8 md:bg-gray-kasa rounded-lg">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 justify-center justify-items-center">
          {logements.map((logement) => {
            return (
              <li key={logement.id}>
                <LogementCard {...logement} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
