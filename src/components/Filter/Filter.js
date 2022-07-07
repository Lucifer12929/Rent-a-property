import { useState } from "react";
import dayjs from "dayjs";
import './Card.css'



import PersonItem from "./Card";
import { data } from "../../data";
import FilterBar from "./FilterBar";


const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);
function Filter() {
  const [allData, setData] = useState(data);

  const generatetypeDataForDropdown = () => {
    return [...new Set(data.map((item) => item.type))];
  };

  const handleFiltercountry = (country) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.country}`;
      if (fullName.toLowerCase().includes(country.toLowerCase())) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterprice = (price) => {
    const filteredData = data.filter((item) => {
      if (parseInt(item.price) <= price) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFiltertype = (type) => {
    const filteredData = data.filter((item) => {
      if (item.type === type) {
        return item;
      }
    });

    setData(filteredData);
  };

  const handleFilterDate = (date, field) => {
    const filteredData = data.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setData(filteredData);
  };

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            types={generatetypeDataForDropdown()}
            oncountryFilter={handleFiltercountry}
            onpriceFilter={handleFilterprice}
            ontypeFilter={handleFiltertype}
            onDateFilter={handleFilterDate}
          />
        </div>
        <div className="col-sm-9">
          <div className="container">
            {allData.map((item) => (
              <PersonItem item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
// import React from "react";
// import { useContext } from "react";
// import { HouseContext } from "../../function";
// import Title from "../../Title";
// // get all unique values
// const getUnique = (items, value) => {
//   return [...new Set(items.map(item => item[value]))];
// };

// const Filter = ({ houses }) => {
//   // react hooks
//   const context = useContext(HouseContext);
//   const {
//     handleChange,
//     type,
//     country,
//     price,
//     minPrice,
//     maxPrice,
    
//   } = context;

//   // get unique types
//   let types = getUnique(houses, "type");
//   // add all
//   types = ["all", ...types];
//   // map to jsx
//   types = types.map((item, index) => (
//     <option key={index} value={item}>
//       {item}
//     </option>
//   ));
//   // get unique capacity
//   let people = getUnique(houses, "country");
//   people = people.map((item, index) => (
//     <option key={index} value={item}>
//       {item}
//     </option>
//   ));
//   return (
//     <section className="filter-container">
//       <Title title="search rooms" />
//       <form className="filter-form">
//         {/* select type */}
//         <div className="form-group">
//           <label htmlFor="type">Type</label>
//           <select
//             name="type"
//             id="type"
//             onChange={handleChange}
//             className="form-control"
//             value={type}
//           >
//             {types}
//           </select>
//         </div>
//         {/* end of select type */}
//         {/* guests  */}
//         <div className="form-group">
//           <label htmlFor="country">Country</label>
//           <select
//             name="country"
//             id="country"
//             onChange={handleChange}
//             className="form-control"
//             value={country}
//           >
//             {people}
//           </select>
//         </div>
//         {/* end of guests */}
//         {/* room price */}
//         <div className="form-group">
//           <label htmlFor="price">House price ${price}</label>
//           <input
//             type="range"
//             name="price"
//             min={minPrice}
//             max={maxPrice}
//             id="price"
//             value={price}
//             onChange={handleChange}
//             className="form-control"
//           />
//         </div>
//         {/* end of room price*/}
//         {/* size */}
        
//         {/* end of select type */}
//         {/* extras */}
        
//         {/* end of extras type */}
//       </form>
//     </section>
//   );
// };

// export default Filter;