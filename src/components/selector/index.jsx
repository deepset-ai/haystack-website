import React, { useState, useEffect } from "react";
import LocalizeLink from "../localizedLink/localizedLink";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import "./index.scss";
/* eslint-disable */
const Selector = (props) => {
  let {
    selected,
    options,
    locale,
    isVersion = false,
    setSelected = () => {},
  } = props;

  if (!selected || selected === "") {
    selected = options[0];
  } 

  const [listStatus, setListStatus] = useState(false);
  const toggleList = (e) => {
    e.stopPropagation();
    setListStatus(!listStatus);
  };

  useEffect(() => {
    const cb = () => {
      setListStatus(false);
    };
    window.addEventListener("click", cb);
    return () => {
      window.removeEventListener("click", cb);
    };
  }, []);

  const handleSelected = (e) => {
    const value = e.target.dataset.value;
    setSelected(value);
  };

  return (
    <div className={`selector-wrapper ${isVersion && "version-wrapper"}`}>
      <div className="selected" onClick={toggleList}>
        {selected}
        <FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/>
      </div>
      <ul
        className={`options-wrapper ${listStatus && "open"}`}
        onClick={handleSelected}
      >
        {options.map((v) => (
          <li className={v === selected ? "active" : ""} key={v} data-value={v}>
            {isVersion ? (
              <LocalizeLink
                locale={locale}
                className="text"
                to={`/docs/${v}/intromd`}
              >
                {v}
              </LocalizeLink>
            ) : (
              <span data-value={v}>{v}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;