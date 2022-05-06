import path from "path";

import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const typesArray = loadFilesSync(path.join(__dirname, "."), {
  extensions: ["graphql"],
});

export const typeDefs = mergeTypeDefs(typesArray);

// import { appointment } from "./appointment";
// import { clinic } from "./clinic";
// import { patient } from "./patient";
// import { patient_history } from "./patient_history";
// import { service } from "./service";
// import { staff } from "./staff";

// export const typeDefs = [
//   appointment,
//   clinic,
//   patient,
//   patient_history,
//   service,
//   staff,
// ];
