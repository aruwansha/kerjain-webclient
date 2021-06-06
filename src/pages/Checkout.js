import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";

import OrderInformation from "parts/Checkout/OrderInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";

import freelancerPage from "json/freelancerPage.json";

export default class CheckoutPage extends Component {
  state = {
    data: {
      name: "",
      email: "",
      phone: "",
      detailNote: "",
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

  render() {
    const { data } = this.state;

    const checkout = {
      duration: 3,
    };

    const steps = {
      bookingInformation: {
        title: "Informasi Pemesanan",
        description: null,
        content: (
          <OrderInformation
            data={data}
            checkout={checkout}
            orderDetail={freelancerPage}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Pembayaran",
        description: "Ikut instruksi di bawah",
        content: (
          <Payment
            data={data}
            orderDetail={freelancerPage}
            checkout={checkout}
            onChange={this.onChange}
          />
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
        <Header isCentered />

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

              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.name !== "" &&
                    data.detailNote !== "" &&
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
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isLight
                    href={`/freelancer/${freelancerPage._id}`}
                  >
                    Cancel
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
                          onClick={nextStep}
                        >
                          Continue to Book
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
                    Cancel
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
                    href=""
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
