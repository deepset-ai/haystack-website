import React from 'react';
import { Link } from "gatsby";

const Button = ({ label, to, className="button", type }) => (
  <Link to={to}>
    <button className={className} type={type}>
      {label}
    </button>
  </Link>
);

export default Button;