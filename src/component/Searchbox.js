import React from "react";

const Searchbox = ({ query, search, setQuery }) => {
  const change = (e) => setQuery(e.target.value);

  return (
    <>
      <div className="search-box">
        <input
          onFocus
          className="search"
          type="text"
          placeholder="Search"
          value={query}
          onChange={change}
          onKeyPress={search}
        />
      </div>
    </>
  );
};

export default Searchbox;
