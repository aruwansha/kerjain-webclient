import React from "react";

import Button from "elements/Button";

import Fade from "react-reveal/Fade";

export default function ServiceFreelancer({ data }) {
  return (
    <section className="container">
      <Fade bottom>
        <h3 className="mb-3" style={{ fontWeight: 600, marginBottom: 24 }}>
          Layanan Tersedia
        </h3>
        {data.serviceId.map((item, index) => {
          return (
            <Fade bottom delay={500 * index}>
              <div className="custom-card" key={`card-${index}`}>
                <div className="row">
                  <div className="col-3">
                    <img
                      src={`/${item._id.imgUrl}`}
                      alt="thumbnail"
                      style={{
                        height: 150,
                        width: 255,
                        borderRadius: 5,
                        margin: 15,
                      }}
                      className="img-thumbnail"
                    />
                  </div>
                  <div className="col" style={{ margin: "10px 20px" }}>
                    <h5 style={{ fontSize: 22, margin: "16px 0 4px 0" }}>
                      {item._id.title}
                    </h5>
                    <p style={{ fontSize: 14, marginBottom: 4 }}>
                      {item._id.description}
                    </p>
                    <h6 style={{ fontSize: 18, marginBottom: 16 }}>
                      Harga Rp {item._id.price}
                    </h6>
                    <Button
                      className="btn"
                      type="link"
                      hasShadow
                      isPrimary
                      href={`/checkout`}
                    >
                      Pesan Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </Fade>
    </section>
  );
}
