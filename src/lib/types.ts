import data from "../db/data.json";

type DataType = typeof data;
export type Logement = DataType[number];
