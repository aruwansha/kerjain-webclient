import React from "react";
import Fade from "react-reveal/Fade";

import { InputText } from "elements/Form";
import { formatNumber } from "utils/formatNumber";


export default function OrderInformation(props) {
  const { data, checkout } = props;
  console.log(checkout)
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="custom-card">
                <div className="row">
                  <div className="col">
                    <img
                      alt="thumbnail"
                      style={{
                        width: 350,
                        borderRadius: 5,
                        margin: "15px",
                      }}
                      className="img-thumbnail"
                      src={checkout.imgUrl}
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col"
                    style={{
                      margin: "0 15px 15px",
                    }}
                  >
                    <h5 className="mb-0">{checkout.title}</h5>
                    <p className="text-gray-600" style={{fontSize: 13}}>{checkout.description}</p>
                    <h5 className="text-gray-800" style={{fontWeight: 600}}>{`Rp ${formatNumber(checkout.price)}`}</h5>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <Fade delay={600}>
              <label htmlFor="name">Nama Lengkap</label>
              <InputText
                id="name"
                name="name"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Alamat Email</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Nomer Hp</label>
              <InputText
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />

              <label htmlFor="detail">Catatan</label>
              <InputText
                id="detailNote"
                name="detailNote"
                value={data.detailNote}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
