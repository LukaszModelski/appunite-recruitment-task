import React from "react";
import { useDispatch } from "react-redux";
import { Filter } from "../Filter/Filter";
import { filters } from "./filtersConfig";
import { resetArticlesList, resetPageNr, resetFilters } from "../../store/actions";

export const ArticlesFilters = () => {
  const dispatch = useDispatch();

  const handleCleasrFiltersBtn = () => {
    dispatch(resetArticlesList());
    dispatch(resetPageNr());
    dispatch(resetFilters());
  }

  return (<section className="filters-section">
    <div className="filters">
      <Filter items={filters.topic} filterType="topic" valueRequired={true}/>
      <Filter items={filters.time} filterType="time" placeholder="From"/>
      <Filter items={filters.sortBy} filterType="sortBy" placeholder="Sort by"/>
    </div>
    <button
      className="filters-section_clear-filters-btn"
      onClick={handleCleasrFiltersBtn}>
      Clear Filters
    </button>
  </section>);
};
