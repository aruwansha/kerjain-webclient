import React, { Component } from "react";
import { connect } from "react-redux";

import Fade from "react-reveal/Fade";

import Header from "parts/service_user/Header";
import Banner from "elements/Banner";
import Footer from "parts/service_user/Footer";

import Button from "elements/Button";

import { fetchPage } from "store/actions/page";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { formatNumber } from "utils/formatNumber";

class RequestPage extends Component {
  componentDidMount() {
    document.title = "KerjaIn | Request";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (getWithExpiry("level") !== "service_user") {
      return this.props.history.push("/freelancer");
    }

    if (!this.props.page.request)
      this.props.fetchPage(
        `user/request/get`,
        "request",
        getWithExpiry("token")
      );
  }
  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("request"))
      return (
        <>
          <div className="loader-sm"></div>
          <div className="d-none d-md-block d-lg-block">
            <div className="loader"></div>
          </div>
        </>
      );
    return (
      <>
        <Header {...this.props} />
        <Banner image="https://source.unsplash.com/random" isExternal />
        <Fade bottom>
          <section className="container">
            <h4>Daftar Request:</h4>
            <Fade>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Judul</th>
                    <th scope="col">Budget</th>
                    <th scope="col">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {page.request.map((request, index) => {
                    return (
                      <tr key={`row-${index}`}>
                        <th scope="row">{index + 1}</th>
                        <td>{request.requestDescription}</td>
                        <td>Rp {formatNumber(request.requestBudget)}</td>
                        <td>
                          <Button
                            href={`/request/${request._id}`}
                            type="link"
                            className="btn btn-primary btn-sm"
                          >
                            Detail
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Fade>
          </section>
        </Fade>
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(RequestPage);
