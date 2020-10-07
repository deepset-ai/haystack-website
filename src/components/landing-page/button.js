import React from 'react';
import { Link } from "gatsby";

const Button = ({ label, to, className="button" }) => (
  <Link to={to}>
    <button className={className}>
      {label}
    </button>
  </Link>
);

export default Button;