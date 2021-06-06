import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import { formatNumber, formatPercent } from "utils/formatNumber";

import logoBca from "assets/images/logo-bri.png";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data } = props;

  const tax = formatPercent(10);
  const admin_cost = 2500;
  const tax_total = 100000 * (parseInt(tax) / 100);
  const subTotal = 100000;
  const total = parseInt(subTotal) + tax_total + admin_cost;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <h5 className="mb-4">Transfer Pembayaran:</h5>
              <p>Tax: {tax}</p>
              <p>Biaya Admin: Rp {formatNumber(admin_cost)}</p>
              <p>Sub total: Rp {formatNumber(subTotal)}</p>
              <p>Total: Rp {formatNumber(total)}</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Rakyat Indonesia</dd>
                    <dd>6425 0101 0678 530</dd>
                    <dd>Dhimas Krisna Ahmadi</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>9824 0502 9465 852</dd>
                    <dd>Ilham Febrian</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                placeholder="Masukkan Bukti Transfer..."
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                placeholder="Masukkan Nama Bank..."
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                placeholder="Masukkan Nama Pengirim..."
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
