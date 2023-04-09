import React from "react";
import Location from "./Location";
import SkillsMenu from "./Skills";

const Filters = () => {
  return (
    <div className="p-3">
      <h6>Filters</h6>
      <h6>Loation</h6>
      <Location/>

      <h6 className="mt-3">Skills</h6>
      <SkillsMenu/>
    </div >
  );
};

export default Filters;
