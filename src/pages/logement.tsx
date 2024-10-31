import { Navigate, useParams } from "react-router-dom";
import { getLogementId } from "../lib/utils";
import Carousel from "../components/carousel";
import LogementDetails from "../components/logement-details";

export default function Logement() {
  const { id } = useParams<{ id: string }>();
  const logement = getLogementId(id!);

  if (!logement) {
    return <Navigate to={"*"} replace />;
  }

  return (
    <section>
      <Carousel image={logement.cover} />
      <LogementDetails {...logement} />
    </section>
  );
}
