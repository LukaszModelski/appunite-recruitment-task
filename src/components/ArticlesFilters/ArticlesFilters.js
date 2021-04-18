import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";
import { setFilterValue } from "../../store/actions";
import { filters } from "./filtersConfig";

export const ArticlesFilters = () => {
  const dispatch = useDispatch();
  const activeTopicFilter = useSelector(state => state.filters.topic);

  const renderFilterDropdown = (filterItems) => (
    filterItems.map(item => (
      <li
        key={uuid()}
        className={`filters_filter-item ${item.searchParam === activeTopicFilter ? 'filters_filter-item--active' : ''}`}
        onClick={() => {handleFilterItemClick(item.searchParam)}}>
        {item.label}
      </li>
    ))
  )

  const handleFilterItemClick = (filterValue) => {
    dispatch(setFilterValue('topic', filterValue));
  }

  return (<div className="filters">
    <ul className="filters_topic">
      {renderFilterDropdown(filters.topic)}
    </ul>
  </div>);
};
