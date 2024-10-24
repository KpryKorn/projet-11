import { useParams } from "react-router-dom";

export default function Logement() {
  const { id } = useParams();

  return <h1>Logement portant l'id {id}</h1>;
}
