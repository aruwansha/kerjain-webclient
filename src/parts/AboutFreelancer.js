import React from "react";

import Fade from "react-reveal/Fade";

export default function AboutFreelancer({ data }) {
  return (
    <section className="container">
      <Fade bottom>
        <h3 className="mt-2" style={{ fontWeight: 600, marginBottom: 24 }}>
          Tentang Jasa Kami
        </h3>
        <Fade bottom delay={500}>
          <div className="row">
            <div className="col-3">
              <img
                src={`/${data.imgUrl}`}
                alt="freelancer"
                style={{ height: 250, width: 250, borderRadius: 5 }}
                className="img-contain img-thumbnail"
              />
            </div>
            <div className="col-9 mt-4">
              <h5 className="mt-2">{data.title}</h5>
              <div className="row">
                <div className="col-auto">
                  <img
                    className="rounded-circle"
                    src={`/${data.userId.imgUrl}`}
                    alt="tes"
                    style={{ height: 50, width: 50 }}
                  />
                </div>
                <div className="col">
                  <h6>{data.userId.name}</h6>
                  <span className="text-gray-500">Freelancer</span>
                </div>
              </div>
              <p className="mt-2">{data.description}</p>
            </div>
          </div>
        </Fade>
      </Fade>
    </section>
  );
}
