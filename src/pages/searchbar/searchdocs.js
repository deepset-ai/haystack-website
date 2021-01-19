import React, { useState }  from "react"

import axios from 'axios';

import "./searchdocs.scss";
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import FormControl from '@material-ui/core/FormControl';
import Button from "../../components/landing-page/button";
import OutlinedInput from '@material-ui/core/OutlinedInput';

const SearchDocs = () => {

  const [query, setQuery] = useState("Ask a Question");
  var test = '';

  const handleSubmit = (event) =>  {

    fetch('https://api.haystack-hub.com/api/v1/workspaces/default/search', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        //'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3OTlmNGZiNC0zMTA2LTRlMWEtODQ1NS1hMzZkNjk0NjNiZmUiLCJleHAiOjE2MTEwNzA0MTV9.QstKaU7MvrLkl3QY4peefUzojILtQpUDC0e35GJurus'
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({questions: ["How to train DPR?"]}) // body data type must match "Content-Type" header
    })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            console.log(data)
          }
        });

    // Send Search Request
    // Create the new request 
    /*var xhrSearch = new XMLHttpRequest();
    var urlSearch = 'https://api.haystack-hub.com/api/v1/workspaces/default/search';
    var dataSearch = {questions: ["How to train DPR?"]};
    var final_search = JSON.stringify(dataSearch);

    xhrSearch.open('POST', urlSearch);
    xhrSearch.setRequestHeader("Content-type", 'application/x-www-form-urlencoded');
    xhrSearch.setRequestHeader("Authorization", 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3OTlmNGZiNC0zMTA2LTRlMWEtODQ1NS1hMzZkNjk0NjNiZmUiLCJleHAiOjE2MTEwNzA0MTV9.QstKaU7MvrLkl3QY4peefUzojILtQpUDC0e35GJurus');

    xhrSearch.onreadystatechange = function() {
      console.log(xhrSearch);
    }

    // Sends the request 
    xhrSearch.send(final_search);*/

    /*axios.defaults.headers.common = {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3OTlmNGZiNC0zMTA2LTRlMWEtODQ1NS1hMzZkNjk0NjNiZmUiLCJleHAiOjE2MTA5OTc1OTN9.-xJNBvZe_c64_9JhniaL2bfDNFgCyHzhVAsFNPTQBlU`
    };

    const config = { headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3OTlmNGZiNC0zMTA2LTRlMWEtODQ1NS1hMzZkNjk0NjNiZmUiLCJleHAiOjE2MTA5OTc1OTN9.-xJNBvZe_c64_9JhniaL2bfDNFgCyHzhVAsFNPTQBlU',
    }};
    axios.post(`https://api.haystack-hub.com/api/v1/workspaces/default/search`, JSON.stringify({questions: ["How to train DPR?"]})).then(response => {
      console.log(response);
      test=response;

    }).catch(error => {
      console.log(error.response)
  });*/

  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
      {modal ? (
        <div className="search-form">
        <form onSubmit={handleSubmit}>
          <FormControl className="form-control" variant="outlined">
          <OutlinedInput required id="query" value={query} onChange={handleChange} />
          </FormControl>
          <Button
            type="submit"
            className="search-button"
            label="Search"
            >
          </Button>
        </form>
      </div>
      ) : (
        <div>
        {test}
        </div>
      )}

      <Link to="/">Go back to the homepage</Link>
      </div>

    )}
  </ModalRoutingContext.Consumer>
  );

};

export default SearchDocs
