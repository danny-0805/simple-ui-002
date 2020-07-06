import React from "react";

const Search = (props) => {
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={props.query}
          onChange={(e) => props.onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
