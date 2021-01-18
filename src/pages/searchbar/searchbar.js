import React from "react"

import "./searchbar.scss";
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const SearchBar = () => {

  return (
    <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
      {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
      ) : (
        <h1>
          Search
        </h1>
      )}

      <h2>Modal Page</h2>

      <Link to="/">Go back to the homepage</Link>
      </div>

    )}
  </ModalRoutingContext.Consumer>
  );

};

export default SearchBar
