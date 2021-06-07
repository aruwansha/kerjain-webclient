import React from "react";

import Star from "assets/images/icons/star.svg";

import Button from "elements/Button";

import Fade from "react-reveal/Fade";

export default function Category({ data }) {
  return data.map((category, index1) => {
    if (category.data < 1) return null;

    return (
      <section id="categories" className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3">{category.name}</h4>
          <div className="container-grid">
            {category.data.map((freelancer, index) => {
              return (
                <Fade bottom delay={500 * index}>
                  <div
                    className={`item column-3 row-1`}
                    key={`highRated-${index}`}
                  >
                    <div className="card card-featured">
                      <figure className="img-wrapper" style={{ height: 150 }}>
                        <img
                          src={`${process.env.REACT_APP_HOST}${freelancer.imgUrl}`}
                          alt={freelancer.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <div className="row">
                          <div className="col-2">
                            <figure className="img-rounder">
                              <img
                                src={`${process.env.REACT_APP_HOST}${freelancer.userId.imgUrl}`}
                                alt="profile"
                                className="profile-pic"
                              />
                            </figure>
                          </div>
                          <div className="col">
                            <p
                              className="text-gray-800"
                              style={{ margin: 0, fontSize: 14 }}
                            >{`${freelancer.userId.name.split(" ")[0]} ${
                              freelancer.userId.name.split(" ")[1]
                            }`}</p>
                            <p
                              className="text-gray-600"
                              style={{ margin: 0, fontSize: 12 }}
                            >
                              <img
                                src={Star}
                                alt="icon star"
                                style={{ width: 12 }}
                              />{" "}
                              {freelancer.rating}
                            </p>
                          </div>
                        </div>

                        <Button
                          type="link"
                          className="stretched-link d-block text-gray-800"
                          href={`/freelancer/${freelancer._id}`}
                        >
                          <h6>{freelancer.title}</h6>
                        </Button>
                      </div>
                      <Button
                        type="link"
                        className="stretched-link"
                        href={`/freelancer/${freelancer._id}`}
                      ></Button>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </Fade>
      </section>
    );
  });
}
