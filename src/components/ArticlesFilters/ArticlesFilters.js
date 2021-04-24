import React from "react";
import { Filter } from "../Filter/Filter";
import { filters } from "./filtersConfig";

export const ArticlesFilters = () => {

  return (<div className="filters">
    <Filter items={filters.topic} filterType="topic" valueRequired={true} />
    <Filter items={filters.time} filterType="time" placeholder="Time"/>
  </div>);
};
