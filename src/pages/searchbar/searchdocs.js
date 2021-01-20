import React, { useState }  from "react"


import "./searchdocs.scss";
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LocalizedLink from "../../components/localizedLink/localizedLink";  

const SearchDocs = () => {

  const [query, setQuery] = useState("What is Haystack?");
  const [items, setItems] = useState([]);

  const handleSubmit = (event) =>  {
    fetch('https://api.haystack-hub.com/api/v1/workspaces/default/search', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        //'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${process.env.GATSBY_HAYSTACK_HUB_TOKEN}`
      },
      //redirect: 'follow', // manual, *follow, error
      //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({questions: [query]}) // body data type must match "Content-Type" header
    })
    .then((response) => response.json())
    .catch((error) => {
      console.log('Error:', error);
    })
    .then((data) => {
      if (data) {
        const questions = data.results;
        let context = [];
        questions.forEach((answers) => {
          answers.answers.forEach((answer) => {
            context.push({answer: answer.answer, context: answer.context, offset_start: answer.offset_start, offset_end: answer.offset_end, filename: answer.file.name.replace('.txt','')});
          });
        });
        setItems(context);
      }
      });
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {    
      handleSubmit();    
    }
  };

  

  function IterateArray(array = []) {
    let elementArray = null;
    array.forEach(element => {
      elementArray = <div><div>{elementArray}</div><LocalizedLink locale="en" to={`/docs/latest/${element.filename}`}><div className="context">{element.context.slice(0, element.offset_start)} <span className="answer">{element.answer}</span> {element.context.slice(element.offset_end, element.context.length)}</div><div><br></br><hr></hr><br></br></div></LocalizedLink></div>;
    })
    return elementArray;
  }

  return (
    <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
      {modal ? (
        <div>
        <div className="search-form">
        <FormControl className="form-control" variant="outlined">
        <OutlinedInput required id="query" classsName="query" value={query} onChange={handleChange} onKeyPress={handleKeyPress} />
        </FormControl>
        <Button className="search-button" onClick={() => {handleSubmit()}}> 
        <FontAwesomeIcon className="fontawsome-icon-search" aria-label="search" icon={faSearch}/> Search
        </Button>
      </div>
      <div className="powered-haystack">* Powered by <span>Haystack</span></div>
      </div>
      ) : (
        null
      )}
        <div className="results">
        {items.length > 0 ? (
          <div>{IterateArray(items)}</div>
            ) : (
              null
            )}
          </div>  
      
      </div>

    )}
  </ModalRoutingContext.Consumer>
  );

};

export default SearchDocs
