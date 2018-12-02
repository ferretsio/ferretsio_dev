import React from "react";
import What from "../Pages/What";
import Why from "../Pages/Why";
import Concept from "../Pages/Concept";
import When from "../Pages/When";
import Technology from "../Pages/Technology";
import Who from "../Pages/Who";
import Aux from "./../../Hoc/Aux";
import { Element } from "react-scroll";

export default props => {
  return (
    <Aux>
      <Element name="what">
        <What />
      </Element>
      <Element name="why">
        <Why />
      </Element>
      <Element name="when">
        <When />
      </Element>
      <Element name="who">
        <Who />
      </Element>
    </Aux>
  );
};
