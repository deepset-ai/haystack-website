import React from 'react';
import Button from "./button";
import Logo from "../../images/HaystackIcon.png"
import HaystackHubSearch  from "../../images/gifs/ScreencastHaystackHub_new.gif"; 
import { InstantSearch, SearchBox, Hits, Highlight, connectSearchBox  } from 'react-instantsearch-dom';
import instantMeiliSearch from '@meilisearch/instant-meilisearch';
import CustomSearchBox from './MaterialUISearchBox';


const ValueProp = props => {


const searchClient = instantMeiliSearch(
  "https://demos.meilisearch.com",
  "dc3fedaf922de8937fdea01f0a7d59557f1fd31832cb8440ce94231cfdde7f25",
  {
    paginationTotalHits: 30, // default: 200.
    placeholderSearch: false // default: true.
  }
);

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <img className="logo-icon" src={Logo} alt="Haystack Icon"></img>
          <p className="main-subtitle">Neural Question Answering at Scale</p>
          <div>
          <Button label="Get Started" to="/docs/intromd"/>
          <Button label="Join Our Community" to="/community/join"/>
          </div>
        </div>
        <div className="main-photo">
        <img src={HaystackHubSearch} className="img-main-photo" alt="Haystack-Hub"></img>
        </div>
      </div>
      <div className="search">
      <InstantSearch
        indexName="steam-video-games"
        searchClient={searchClient}
      >
        <CustomSearchBox defaultRefinement="iphone"/><br></br>
        <Hits hitComponent={Hit} />
        </InstantSearch>
        </div>
    </section>
  )
};

function Hit(props) {
  return <div className="docs-page"><Highlight attribute="name" hit={props.hit} /></div>;
}


export default ValueProp;