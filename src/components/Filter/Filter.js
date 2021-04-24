import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue, resetArticlesList, resetPageNr } from "../../store/actions";
import { useComponentVisible } from "../../hooks/useComponentVisible";

export const Filter = props => {
  const dispatch = useDispatch();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [activeItemIndex, setActiveItemIndex] = useState(props.valueRequired ? 0 : null);
  const filterCurrentValue = useSelector(state => state.filters[props.filterType]);

  const handleCurrentItemCLick = () => {
    setIsComponentVisible(!isComponentVisible);
  }

  const handleItemCLick = (filterValue, itemIndex) => {
    if(props.valueRequired) {
      handleItemClickRequired(filterValue, itemIndex);
    } else {
      handleItemClickNotRequired(filterValue, itemIndex);
    }
    setIsComponentVisible(false);
  }

  const handleItemClickRequired = (filterValue, itemIndex) => {
    if(filterValue !== filterCurrentValue) {
      dispatch(resetArticlesList());
      dispatch(resetPageNr());
      dispatch(setFilterValue(props.filterType, filterValue));
      setActiveItemIndex(itemIndex);
    }
  }

  const handleItemClickNotRequired = (filterValue, itemIndex) => {
    dispatch(resetArticlesList());
    dispatch(resetPageNr());
    if(filterValue !== filterCurrentValue) {
      dispatch(setFilterValue(props.filterType, filterValue));
      setActiveItemIndex(itemIndex);
    } else {
      dispatch(setFilterValue(props.filterType, false));
      setActiveItemIndex(null);
    }
  }

  const renderFilterDropdown = items => items.map((item, i) => (
    <li
      key={item.label}
      className="filter_item"
      className={`filter_item ${item.searchParam === filterCurrentValue ? 'filter_item--active' : ''}`}
      onClick={() => { handleItemCLick(item.searchParam, i) }}>
      {item.label}
    </li>));

  return <div className="filter" ref={ref}>
    <div
      className="filter_curr-item"
      className={`filter_curr-item ${activeItemIndex === null ? 'filter_curr-item--placeholder' : ''}`}
      onClick={handleCurrentItemCLick}>
      {activeItemIndex === null ? props.placeholder : props.items[activeItemIndex].label}
    </div>
    {isComponentVisible && <ul className="filter_curr-items-dropdown">
      {props.items && renderFilterDropdown(props.items)}
    </ul>}
  </div>
}
