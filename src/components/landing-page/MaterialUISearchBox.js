import React from "react"
import { connectSearchBox } from 'react-instantsearch-dom';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  /*<form noValidate action="" role="search">
    <input
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    />
    <button onClick={() => refine('')}>Reset query</button>
    {isSearchStalled ? 'My search is stalled' : ''}
  </form>*/

  <div>
        <div className="search-form">
        <FormControl className="form-control" variant="outlined">
        <OutlinedInput required id="query" classsName="query" value={currentRefinement}
                    onChange={event => refine(event.currentTarget.value)} />
        </FormControl>
        <Button className="search-button" onClick={() => refine('')}> 
        <FontAwesomeIcon className="fontawsome-icon-search" aria-label="search" icon={faSearch}/> Search
        </Button>
      </div>
      </div>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;