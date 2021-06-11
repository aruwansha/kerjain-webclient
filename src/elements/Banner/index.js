import React from "react";

import propTypes from "prop-types";

import Fade from "react-reveal/Fade";

export default function Banner(props) {
  const { image } = props;
  return (
    <Fade>
      <section>
        <div className="container">
          <div className="img-wrap">
            <img src={`${image}`} alt="banner" className="img-cover img-thumbnail" />
          </div>
        </div>
      </section>
    </Fade>
  );
}

Banner.propTypes = {
  image: propTypes.string,
};
