import React, { useEffect, useState } from "react";

const Search = props => {
  const [search, setSearch] = useState("");
  const handleChange = e => {
    setSearch(e.target.value);
  };
  useEffect(
    () => {
      props.onSearch(search);
    },
    [search]
  );
  return (
    <div className="mt-5 mb-5 text-center bg-warning w-25 mx-auto p-3">
      <input
        type="text"
        placeholder="Search here"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
