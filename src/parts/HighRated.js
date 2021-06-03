import React from "react";

import Button from "elements/Button";

export default function HighRated(props) {
  return (
    <section id="highRated" className="container">
      <h5>Rating Tinggi</h5>
      <div className="container-grid">
        {props.data.map((freelancer, index) => {
          return (
            <div className={`item column-3 row-1`} key={`highRated-${index}`}>
              <div className="card card-featured">
                <figure className="img-wrapper">
                  <img
                    src={freelancer.imgUrl}
                    alt={freelancer.title}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <div className="row">
                    <div className="col-2">
                      <figure className="img-rounder">
                        <img
                          src={freelancer.userId.imgUrl}
                          alt=""
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
                        Rating {freelancer.rating}
                      </p>
                    </div>
                  </div>

                  <Button
                    type="link"
                    className="stretched-link d-block text-gray-800"
                    href={`/properties/${freelancer._id}`}
                  >
                    <h5>{freelancer.title}</h5>
                  </Button>
                  <span className="text-gray-600">
                    Rating {freelancer.rating}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
