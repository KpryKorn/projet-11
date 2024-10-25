import { getLogements } from "../lib/utils";

const logements = getLogements();

export default function LogementCard({
  ...logement
}: (typeof logements)[number]) {
  return (
    <article className="max-w-[340px] w-full rounded-lg overflow-hidden">
      <figure className="relative w-full aspect-square">
        <img
          className="h-full w-full object-cover"
          src={logement.cover}
          alt={logement.title}
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent" />
        <figcaption className="w-full absolute bottom-0 left-0 p-4 font-medium text-lg text-white">
          <h3>{logement.title}</h3>
        </figcaption>
      </figure>
    </article>
  );
}
