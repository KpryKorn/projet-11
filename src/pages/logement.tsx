import { Navigate, useParams } from "react-router-dom";
import { getLogementId } from "../lib/utils";

export default function Logement() {
  const { id } = useParams<{ id: string }>();
  const logement = getLogementId(id!);

  if (!logement) {
    return <Navigate to={"*"} replace />;
  }

  return <h1>Logement portant l'id {id}</h1>;
}
