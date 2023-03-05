import jobad from "./jobad";
import summarize from "./summarize";
import codeInterpret from "./interpret";
import intro from "./intro";
import helloworld from "./helloworld";
import example from "./example";
import patoisTranslator from "./patoisTranslator";
import jamaicaAi from "./jamaicaAi";

import airbnb from "./airbnb"; //under constrution
import legalStructure from "./law/legalStructure";

const TOOLS = [
  codeInterpret,
  intro,
  jobad,
  summarize,

  jamaicaAi,
  patoisTranslator,
  legalStructure,
];

export default TOOLS;
