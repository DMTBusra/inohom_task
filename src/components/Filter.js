import React from 'react'

import { data } from "../components/data";
const Filter = ({setData}) => {

const handleClick = (e) => {
  if (e.target.value === "a-z") {
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.name.toUpperCase() < b.name.toUpperCase()) {
        return -1;
      }
      if (a.name.toUpperCase() > b.name.toUpperCase()) {
        return 1;
      }
      return 0;
    });
    setData(sortedData);
    console.log(sortedData);
  } else if (e.target.value === "Hepsi") {
    setData(data)
  } else if (e.target.value === "Alan") {
  } else if (e.target.value === "Tip") {
  }
};
  return (
    <div>
      <li className="filter">
        <div>
          <input
            type="radio"
            id="all"
            name="filter"
            value="Hepsi"
            onClick={handleClick}
          />
          <label for="all">Hepsi</label>
        </div>
        <div>
          <input
            type="radio"
            id="area"
            name="filter"
            value="Alan"
            onClick={handleClick}
          />
          <label for="area">Alan</label>
        </div>
        <div>
          <input
            type="radio"
            id="type"
            name="filter"
            value="Tip"
            onClick={handleClick}
          />
          <label for="all">Tip</label>
        </div>
        <div>
          <input
            type="radio"
            id="a-z"
            name="filter"
            value="a-z"
            onClick={handleClick}
          />
          <label for="a-z">a-z</label>
        </div>
      </li>
    </div>
  );
}

export default Filter