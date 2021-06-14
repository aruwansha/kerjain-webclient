import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

import { formatNumber, formatPercent } from "utils/formatNumber";

export default function Payment(props) {
  const { data, checkout } = props;

  const tax = formatPercent(10);
  const admin_cost = 2500;
  const tax_total = checkout.price * (parseInt(tax) / 100);
  const subTotal = checkout.price;
  const total = parseInt(subTotal) + tax_total + admin_cost;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 border-right py-custom pd-right-50 pd-left-50" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <h5 className="mb-4">Transfer Pembayaran:</h5>
              <p>Pajak: {tax}</p>
              <p>Biaya Admin: Rp {formatNumber(admin_cost)}</p>
              <p>Total: Rp {formatNumber(total)}</p>
              {checkout.bank.map((bank, index) => {
                return (
                  <div className="row mt-4" key={`bank-${index}`}>
                    <div className="col-3 text-right" style={{margin: "20px auto"}}>
                      <img src={`${process.env.REACT_APP_HOST}${bank.imgUrl}`} alt={`Bank ${bank.bankName}`} width="60" />
                    </div>
                    <div className="col">
                      <dl>
                        <dd>{bank.bankName}</dd>
                        <dd>{bank.bankAccount}</dd>
                        <dd>{bank.accountHolder}</dd>
                      </dl>
                    </div>
                  </div>
                );
              })}
            </Fade>
          </div>
          <div className="col-lg-5 py-custom pd-right-50 pd-left-50" style={{ paddingLeft: 80 }}>
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
