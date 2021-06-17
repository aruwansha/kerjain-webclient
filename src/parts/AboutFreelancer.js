import React from "react";

import Fade from "react-reveal/Fade";

import Button from "elements/Button";

import thumbnailDefault from "assets/images/thumbnail-default.svg";
import profileDefault from "assets/images/pp-default.svg";

export default function AboutFreelancer({ data }) {
  return (
    <section className="container">
      <Fade bottom>
        <h3 className="mt-2" style={{ fontWeight: 600, marginBottom: 24 }}>
          Tentang Jasa Kami
        </h3>
        <Fade bottom delay={500}>
          <div className="row">
            <div className="col-lg-4">
              <img
                src={`${process.env.REACT_APP_HOST}${data.imgUrl}`}
                alt="freelancer"
                style={{ height: 250, width: 360, borderRadius: 5 }}
                className="img-contain img-thumbnail d-none d-lg-block"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = thumbnailDefault;
                }}
              />
            </div>
            <div className="col-lg-8 mt-4">
              <h5 className="mt-2">{data.title}</h5>
              <div className="row">
                <div className="col-auto">
                  <img
                    className="rounded-circle"
                    src={`${process.env.REACT_APP_HOST}${data.userId.imgUrl}`}
                    alt="tes"
                    style={{ height: 50, width: 50 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = profileDefault;
                    }}
                  />
                </div>
                <div className="col">
                  <h6>{data.userId.name}</h6>
                  <span className="text-gray-500">Freelancer</span>
                </div>
              </div>
              <p className="mt-2">{data.description}</p>
              <Button type="link" href={`/chat/${data.userId._id}`} className="btn btn-primary btn-sm">
                Hubungi
              </Button>
            </div>
          </div>
        </Fade>
      </Fade>
    </section>
  );
}
