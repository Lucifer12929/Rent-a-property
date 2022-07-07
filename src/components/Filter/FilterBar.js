import { useState } from "react";
import './FilterBar.css'
const FilterBar = ({
  types,
  oncountryFilter,
  onpriceFilter,
  ontypeFilter,
  onDateFilter,
 
}) => {
  const [filters, setFilters] = useState({
    country: "",
    price:0,
    type: "",
    from: "",
    
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "country":
        oncountryFilter(value);
        break;
      case "price":
        onpriceFilter(value);
        break;
      case "type":
        ontypeFilter(value);
        break;
      case "from":
            onDateFilter(value, "from");
            break;
      
      default:
        break;
    }
  };

  return (
    <div className="filter_container">
      <div className="col">
        <h1 className="heading">Search by filters</h1>
      </div>
      <div className="filter_component">
      <div className="filter_box">
        <label htmlFor="country">Location<br></br></label>
        <input
          type="text"
          className="form-control"
          id="country"
          value={filters.country}
          
          onChange={handleInput("country")}
        />
      </div>

      <div className="filter_box">
        <label htmlFor="price">Maximum Price<br></br></label>
        <input
          type="number"
          className="form-control"
          id="price"
          onChange={handleInput("price")}
        />
      </div>

      <div className="filter_box">
        <label htmlFor="type">Type of Home<br></br></label>
        <select
          className="form-control"
          id="type"
          onChange={handleInput("type")}
        >
          <option value="">Select</option>
          {types.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="filter_box">
        <label htmlFor="startDate">When you Need <br></br></label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>

      </div>
    </div>
  );
};

export default FilterBar;