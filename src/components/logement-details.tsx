import { Logement } from "../lib/types";
import Details from "./details";
import StarRating from "./star-rating";
import Tag from "./tag";

export default function LogementDetails({ ...logement }: Logement) {
  const hostName = logement.host.name.split(" ")[0];
  const hostLastName = logement.host.name.split(" ")[1];
  return (
    <article className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row justify-between md:items-center">
        <div>
          <h3 className="text-red-kasa text-2xl md:text-4xl font-medium">
            {logement.title}
          </h3>
          <p className="font-medium md:text-lg">{logement.location}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-[10px]">
          {logement.tags.map((tag, idx) => (
            <Tag key={idx} tag={tag} />
          ))}
        </ul>

        <div className="flex md:flex-col-reverse items-center justify-between gap-4">
          <StarRating rating={Number(logement.rating)} />

          <div className="flex items-center gap-4">
            <span className="flex flex-col">
              <p className="font-medium text-lg text-red-kasa">{hostName}</p>
              <p className="font-medium text-lg text-red-kasa">
                {hostLastName}
              </p>
            </span>
            <img
              className="h-16 w-16 rounded-full"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between md:gap-[76px]">
        <Details text="Description">
          <p>{logement.description}</p>
        </Details>
        <Details text="Equipements">
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
