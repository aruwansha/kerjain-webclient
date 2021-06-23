import React, { Component } from "react";
import { connect } from "react-redux";
import Time from "react-time-format";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Header from "parts/Header";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";
import { deleteAllChat } from "store/actions/chat";

import { getWithExpiry } from "utils/setExpiryLocalStorage";
import Button from "elements/Button";

class ChatPage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page.chats)
      this.props.fetchPage(`user/chat/get`, "chats", getWithExpiry("token"));
  }

  _delete = (id) => {
    this.props.deleteAllChat(id, getWithExpiry("token"));
    toast.success("Pesan berhasil dihapus", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    this.props.fetchPage(`user/chat/get`, "chats", getWithExpiry("token"));
  };

  componentDidUpdate() {
    this.props.fetchPage(`user/chat/get`, "chats", getWithExpiry("token"));
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("chats")) return null;

    if (page.chats.message === "no chat yet")
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
                    <div className="d-flex justify-content-center">
                      <p className="text-gray-600" style={{ marginTop: 90 }}>
                        Belum Ada Chat Masuk
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </>
      );

    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <h4 className="mb-3">Daftar Chat</h4>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header"></div>
                <div
                  className="card-body"
                  style={{ height: 500, overflow: "auto" }}
                >
                  {page.chats.chats.map((chat, index) => {
                    return (
                      <div className="form-group" key={`key-${index}`}>
                        <div className="row">
                          <div className="col col-lg-10">
                            <label
                              for=""
                              className="text-primary font-weight-bold mr-1"
                            >
                              {chat.doc.freelancerUserId[0].name}
                            </label>
                            {!chat.doc.isReadServiceUser ? (
                              <span className="badge badge-danger badge-counter">
                                <i className="fa fa-xs fa-circle">o</i>
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          <div className="col col-lg-2 text-right">
                            <p>
                              <Time
                                value={chat.doc.time}
                                format="YYYY/MM/DD hh:mm:ss"
                              />
                            </p>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                          <div className="col col-lg-10">
                            <p>
                              <span className="font-weight-bold">
                                {chat.doc.from[0].name}
                              </span>
                              : {chat.doc.message}
                            </p>
                          </div>
                          <div className="col-sm-12 col-lg-2 text-right">
                            <Button
                              type="link"
                              href={`/chat/${chat.doc.freelancerUserId[0]._id}`}
                            >
                              Balas
                            </Button>
                            <br />
                            <a
                              onClick={() => {
                                this._delete(chat.doc.freelancerUserId[0]._id);
                              }}
                              href="#/"
                              className="text-danger"
                            >
                              Hapus
                            </a>
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

export default connect(mapStateToProps, { fetchPage, deleteAllChat })(ChatPage);
