import React from 'react';
import { Link } from "gatsby";

const Button = ({ label, to }) => (
  <Link to={to}>
    <button className="button">
      {label}
    </button>
  </Link>
);

export default Button;