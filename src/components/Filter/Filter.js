import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterValue, resetPageNr } from "../../store/actions";
import { useComponentVisible } from "../../hooks/useComponentVisible";

export const Filter = props => {
  const dispatch = useDispatch();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const filterCurrentValue = useSelector(state => state.filters[props.filterType]);

  const handleCurrentItemCLick = () => {
    setIsComponentVisible(!isComponentVisible);
  }

  const handleItemCLick = (filterSearchParam, itemLabel) => {
    if(props.valueRequired) {
      handleItemClickRequired(filterSearchParam, itemLabel);
    } else {
      handleItemClickNotRequired(filterSearchParam, itemLabel);
    }
    setIsComponentVisible(false);
  }

  const handleItemClickRequired = (filterSearchParam, itemLabel) => {
    if(filterSearchParam !== filterCurrentValue.searchParam) {
      dispatch(resetPageNr());
      dispatch(setFilterValue(props.filterType, filterSearchParam, itemLabel));
    }
  }

  const handleItemClickNotRequired = (filterSearchParam, itemLabel) => {
    dispatch(resetPageNr());
    if(filterSearchParam !== filterCurrentValue.searchParam) {
      dispatch(setFilterValue(props.filterType, filterSearchParam, itemLabel));
    } else {
      dispatch(setFilterValue(props.filterType, false, ''));
    }
  }

  const renderFilterDropdown = items => items.map(item => (
    <li
      key={item.label}
      className="filter_item"
      className={`filter_item ${item.searchParam === filterCurrentValue.searchParam ? 'filter_item--active' : ''}`}
      onClick={() => { handleItemCLick(item.searchParam, item.label) }}>
      {item.label}
    </li>));

  return <div className="filter" ref={ref}>
    <div
      className="filter_curr-item"
      className={`filter_curr-item ${filterCurrentValue.label ? '' : 'filter_curr-item--placeholder'}`}
      onClick={handleCurrentItemCLick}>
      {filterCurrentValue.label ? filterCurrentValue.label : props.placeholder}
    </div>
    {isComponentVisible && <ul className="filter_curr-items-dropdown">
      {props.items && renderFilterDropdown(props.items)}
    </ul>}
  </div>
}
