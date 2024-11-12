import HeroBanner from "../components/hero-banner";
import AboutImg from "../assets/about-img.png";
import Details from "../components/details";
import ABOUT_TEXT from "../db/about.json";

export default function About() {
  return (
    <>
      <HeroBanner img={AboutImg} />
      <section className="md:px-[10%]">
        {ABOUT_TEXT.map((text, idx) => (
          <Details key={idx} text={text.title}>
            {text.description}
          </Details>
        ))}
      </section>
    </>
  );
}
