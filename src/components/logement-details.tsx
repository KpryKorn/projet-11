import { Logement } from "../lib/types";
import Details from "./details";
import StarRating from "./star-rating";
import Tag from "./tag";

export default function LogementDetails({ ...logement }: Logement) {
  const hostName = logement.host.name.split(" ")[0];
  const hostLastName = logement.host.name.split(" ")[1];
  return (
    <article className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-red-kasa text-4xl font-medium">
            {logement.title}
          </h3>
          <p className="font-medium text-lg">{logement.location}</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex flex-col">
            <p className="font-medium text-lg text-red-kasa">{hostName}</p>
            <p className="font-medium text-lg text-red-kasa">{hostLastName}</p>
          </span>
          <img
            className="h-16 w-16 rounded-full"
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <ul className="flex gap-[10px]">
          {logement.tags.map((tag, idx) => (
            <Tag key={idx} tag={tag} />
          ))}
        </ul>

        <div>
          <StarRating rating={Number(logement.rating)} />
        </div>
      </div>

      <div className="flex items-center justify-between gap-[76px]">
        <Details logement={logement} text="Description">
          <p>{logement.description}</p>
        </Details>
        <Details logement={logement} text="Equipements">
          <ul>
            {logement.equipments.map((equipment, idx) => (
              <li key={idx}>{equipment}</li>
            ))}
          </ul>
        </Details>
      </div>
    </article>
  );
}
