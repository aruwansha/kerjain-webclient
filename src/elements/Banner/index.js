import React from "react";

import propTypes from "prop-types";

import Fade from "react-reveal/Fade";

export default function Banner(props) {
  const { image } = props;

  if (props.isExternal)
    return (
      <Fade>
        <section>
          <div className="container">
            <div className="img-wrap">
              <img
                src={`${image}`}
                alt="banner"
                className="img-cover img-thumbnail"
              />
            </div>
          </div>
        </section>
      </Fade>
    );
  return (
    <Fade>
      <section>
        <div className="container">
          <div className="img-wrap">
            <img
              src={`${process.env.REACT_APP_HOST}${image}`}
              alt="banner"
              className="img-cover img-thumbnail"
            />
          </div>
        </div>
      </section>
    </Fade>
  );
}

Banner.propTypes = {
  image: propTypes.string,
  isExternal: propTypes.bool,
};
