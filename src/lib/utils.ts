import data from "../db/data.json";

export const getLogements = () => {
  return data;
};

export const getLogementId = (id: string) => {
  return data.find((logement) => logement.id === id);
};
