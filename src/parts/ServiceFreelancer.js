import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import thumbnailDefault from "assets/images/thumbnail-default.svg";

import propTypes from "prop-types";

import Button from "elements/Button";

import { formatNumber } from "utils/formatNumber";

import Fade from "react-reveal/Fade";

class ServiceFreelancer extends Component {
  startBooking = (item) => {
    this.props.startBooking({
      serviceId: item._id,
      title: item.title,
      price: item.price,
      description: item.description,
      imgUrl: item.imgUrl,
      bank: this.props.data.bank,
    });
    this.props.history.push("/checkout");
  };
  render() {
    const { data } = this.props;
    if (data.serviceId.length < 1)
      return (
        <section className="container">
          <Fade bottom>
            <h3 className="mb-3" style={{ fontWeight: 600, marginBottom: 24 }}>
              Layanan Tersedia
            </h3>
            <Fade>
              <div
                className="custom-card"
                style={{
                  textAlign: "center",
                  height: 150,
                  margin: "auto",
                  padding: "65px",
                }}
              >
                Layanan belum tersedia
              </div>
            </Fade>
          </Fade>
        </section>
      );

    return (
      <section className="container">
        <Fade bottom>
          <h3 className="mb-3" style={{ fontWeight: 600, marginBottom: 24 }}>
            Layanan Tersedia
          </h3>
          {data.serviceId.map((item, index) => {
            return (
              <Fade
                bottom
                delay={500 * index}
                key={`card-${index}`}
                data-id={item._id._id}
              >
                <div className="custom-card">
                  <div className="row">
                    <div className="col-lg-3 col-sm-12 text-center">
                      <img
                        src={`${process.env.REACT_APP_HOST}${item._id.imgUrl}`}
                        alt={`Thumbnail ${item._id.title}`}
                        style={{
                          height: 150,
                          width: 255,
                          borderRadius: 5,
                          margin: 15,
                        }}
                        className="img-thumbnail"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = thumbnailDefault;
                        }}
                      />
                    </div>
                    <div className="col " style={{ margin: "10px 20px" }}>
                      <h5 style={{ fontSize: 22, margin: "16px 0 4px 0" }}>
                        {item._id.title}
                      </h5>
                      <p style={{ fontSize: 14, marginBottom: 4 }}>
                        {item._id.description}
                      </p>
                      <h6 style={{ fontSize: 18, marginBottom: 16 }}>
                        Harga Rp {formatNumber(item._id.price)}
                      </h6>

                      <Button
                        className="btn"
                        isPrimary
                        onClick={() => {
                          this.startBooking(item._id);
                        }}
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
}

ServiceFreelancer.propTypes = {
  startBooking: propTypes.func,
};

export default withRouter(ServiceFreelancer);
