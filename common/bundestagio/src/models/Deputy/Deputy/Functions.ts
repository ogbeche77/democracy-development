import { Schema } from "mongoose";

export interface IDeputyFunctions {
  category: string;
  functions: string[];
}

const DeputyFunctions = new Schema(
  {
    category: { type: String },
    functions: [{ type: String }],
  },
  { _id: false }
);

export default DeputyFunctions;
