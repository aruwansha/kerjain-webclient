import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import Header from "parts/service_user/Header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";

import OrderInformation from "parts/service_user/Checkout/OrderInformation";
import Payment from "parts/service_user/Checkout/Payment";
import Completed from "parts/service_user/Checkout/Completed";

import { submitBookingService, submitBookingRequest } from "store/actions/checkout";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

class Checkout extends Component {
  state = {
    data: {
      name: "",
      email: "",
      phone: "",
      detail: "",
      total: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  _Submit = (nextStep) => {
    const { data } = this.state;

    const { checkout } = this.props;

    const tax = 10;
    const admin_cost = 2500;
    const tax_total = checkout.price * (tax / 100);
    const subTotal = checkout.price;
    const total = parseInt(subTotal) + tax_total + admin_cost;

    const payload = new FormData();
    if (checkout.serviceId) {
      payload.append("name", data.name);
      payload.append("email", data.email);
      payload.append("phone", data.phone);
      payload.append("detailNote", data.detail);
      payload.append("total", total);
      payload.append("serviceId", checkout.serviceId);
      payload.append("accountHolder", data.bankHolder);
      payload.append("bankFrom", data.bankName);
      payload.append("image", data.proofPayment[0]);
      this.props.submitBookingService(payload, getWithExpiry("token")).then(() => {
        nextStep();
      });
    }
    if (checkout.requestId) {
      payload.append("name", data.name);
      payload.append("email", data.email);
      payload.append("phone", data.phone);
      payload.append("detailNote", data.detail);
      payload.append("total", total);
      payload.append("requestId", checkout.requestId);
      payload.append("accountHolder", data.bankHolder);
      payload.append("bankFrom", data.bankName);
      payload.append("image", data.proofPayment[0]);
      this.props.submitBookingRequest(payload, getWithExpiry("token")).then(() => {
        nextStep();
      });
    }

  };

  render() {
    const { data } = this.state;
    const { checkout } = this.props;

    if (!getWithExpiry("token"))
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-lg-3">
              Eitss stop✋ <br /> Silakan login dahulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isLight
                >
                  Kembali
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-lg-3">
              Eitss stop✋ <br /> pilih layanan dulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isLight
                >
                  Kembali
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    const steps = {
      orderInformation: {
        title: "Informasi Pemesanan",
        description: null,
        content: (
          <OrderInformation
            data={data}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Pembayaran",
        description: "Ikut instruksi di bawah",
        content: (
          <Payment data={data} checkout={checkout} onChange={this.onChange} />
        ),
      },
      completed: {
        title: "Selesai",
        description: "Pembayaran selesai silakan menunggu pesanan ",
        content: <Completed />,
      },
    };

    return (
      <>
        <Header {...this.props} isCentered />

        <Stepper steps={steps} initialStep="Booking Information">
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />

              <Meta data={steps} current={CurrentStep} />

              <MainContent data={steps} current={CurrentStep} />

              {CurrentStep === "orderInformation" && (
                <Controller>
                  {data.name !== "" &&
                    data.detail !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Lanjut
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    isBlock
                    isLight
                    onClick={() => this.props.history.goBack()}
                  >
                    Batal
                  </Button>
                </Controller>
              )}

              {CurrentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" &&
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Sewa
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Kembali
                  </Button>
                </Controller>
              )}

              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href="/"
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps, { submitBookingService, submitBookingRequest })(Checkout);
