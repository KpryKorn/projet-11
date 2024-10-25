export default function HeroBanner({ img, phrase }: { img: string; phrase?: string }) {
  return (
    <section className="relative rounded-lg max-h-[230px] h-[230px] w-full overflow-hidden flex items-center justify-center mb-8">
      <img
        className="absolute top-0 left-0 h-full w-full object-cover brightness-[35%]"
        src={img}
        alt={phrase ?? "Hero banner"}
      />
      {phrase && (
        <p className="inline-flex relative z-10 text-white font-bold text-5xl text-center">
          {phrase}
        </p>
      )}
    </section>
  );
}
