import React from "react";

import Button from "elements/Button";

import propTypes from "prop-types";

export default function BrandIcon(props) {
  return (
    <Button className="brand-text-icon" type="link" href="/" style={props.style}>
      Kerja<span className="text-secondary">In</span>
    </Button>
  );
}

BrandIcon.propTypes = {
  style: propTypes.string,
};
