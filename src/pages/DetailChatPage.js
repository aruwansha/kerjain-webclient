import React, { Component } from "react";
import { connect } from "react-redux";
import Time from "react-time-format";

import Header from "parts/Header";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

class DetailChatPage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);
    console.log(this.params);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/chats/get/${this.props.match.params.id}`,
        this.props.match.params.id,
        getWithExpiry("token")
      );
  }
  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;

    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <h4 className="mb-3">Chat </h4>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  {/* <div className="d-flex justify-content-center">
                    <p className="text-gray-600" style={{marginTop: 90}}>Belum Ada Chat Masuk</p>
                  </div> */}
                  {page[match.params.id].chats.map((chat, index) => {
                    return (
                      <div className="form-group" key={`key-${index}`}>
                        <div className="row">
                          <div className="col">
                            <label
                              for=""
                              className="text-primary font-weight-bold mr-1"
                            >
                              {chat.from.name}
                            </label>
                            {!chat.isReadServiceUser ? (
                              <span className="badge badge-danger badge-counter">
                                <i className="fa fa-xs fa-circle">o</i>
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="col text-right">
                            <p>
                              <Time
                                value={chat.time}
                                format="YYYY/MM/DD hh:mm:ss"
                              />
                            </p>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                          <div className="col col-lg-10">
                            <p>
                              {chat.message}
                            </p>
                          </div>
                          <div className="col col-lg-2 text-right">
                            <form>
                              <a
                                type="submit"
                                href={`/chat/${chat.freelancerUserId}`}
                                className="text-danger"
                              >
                                Hapus
                              </a>
                            </form>
                          </div>
                        </div>
                        <div className="row d-flex">
                          <div className="col-12 text-right"></div>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                  <form action="">
                    <div className="row">
                      <div className="col-lg-11 col-9 text-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tulis pesan..."
                          name="message"
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-lg-1 col-3 text-right">
                        <button className="btn btn-primary" type="submit">
                          Kirim
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(DetailChatPage);
