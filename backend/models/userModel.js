import { db } from "../db.js";

const schema = new db.Schema({ id: "Number", name: "String" });
export const User = db.model("User", schema);

// export User ;
