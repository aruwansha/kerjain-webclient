import React, { Component } from "react";
import { connect } from "react-redux";
import Time from "react-time-format";

import Header from "parts/Header";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

class ChatPage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page.chats)
      this.props.fetchPage(`/chats/get`, "chats", getWithExpiry("token"));
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("chats")) return null;

    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <h4 className="mb-3">Daftar Chat</h4>
          <div className="row">
            <div className="col">
              <div className="card" style={{ height: 300 }}>
                <div className="card-header"></div>
                <div className="card-body">
                  {/* <div className="d-flex justify-content-center">
                    <p className="text-gray-600" style={{marginTop: 90}}>Belum Ada Chat Masuk</p>
                  </div> */}
                  {page.chats.chats.map((chat, index) => {
                    return (
                      <div className="form-group" key={`key-${index}`}>
                        <div className="row">
                          <div className="col-10">
                            <label
                              for=""
                              className="text-primary font-weight-bold mr-1"
                            >
                              {chat.doc.freelancerUserId[0].name}
                            </label>
                            <span className="badge badge-danger badge-counter">
                              <i className="fa fa-xs fa-circle">o</i>
                            </span>
                          </div>
                          <div className="col-2 text-right">
                            <p>
                              <Time value={chat.doc.time} format="YYYY/MM/DD hh:mm:ss" />
                            </p>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                          <div className="col-10">
                            <p>
                              <span className="font-weight-bold">
                                {chat.doc.from[0].name}
                              </span>
                              : {chat.doc.message}
                            </p>
                          </div>
                          <div className="col-2 text-right">
                            <a href="/chat/605b5889babfe71e8432d321">Balas</a>
                            <form>
                              <a
                                type="submit"
                                href="/chat/41515123"
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

export default connect(mapStateToProps, { fetchPage })(ChatPage);
