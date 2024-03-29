import React, { Component } from "react";
import { connect } from "react-redux";
import Time from "react-time-format";

import Header from "parts/Header";
import Footer from "parts/Footer";

import Button from "elements/Button";

import { fetchPage } from "store/actions/page";

import { chat, deleteChat } from "store/actions/chat";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class ChatDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        message: "",
      },
    };

    window.title = "KerjaIn | Detail Chat";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/chat/get/${this.props.match.params.id}`,
        this.props.match.params.id,
        getWithExpiry("token")
      );

    this.handleChange = this.handleChange.bind(this);
    this._chat = this._chat.bind(this);
  }

  handleChange(event) {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  }

  _chat = (event) => {
    const { data } = this.state;
    if (data.message === "") {
      toast.error("Tolong isi fieldnya!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = {
        message: data.message,
      };
      this.props.chat(
        payload,
        this.props.match.params.id,
        getWithExpiry("token")
      );
    }
    event.preventDefault();
  };

  _delete = (id) => {
    this.props.deleteChat(id, getWithExpiry("token"));
  };

  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;

    if (page[match.params.id].length === 0)
      return (
        <>
          <Header {...this.props} />
          <div className="container">
            <h4 className="mb-3">Detail Chat</h4>
            <div className="row">
              <div className="col">
                <div className="card" style={{ height: 300 }}>
                  <div className="card-header"></div>
                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <p
                        className="text-gray-600"
                        style={{ marginTop: 90, marginBottom: 80 }}
                      >
                        Belum Ada Chat Masuk
                      </p>
                    </div>
                    <form onSubmit={this._chat}>
                      <div className="row">
                        <div className="col-lg-11 col-9 text-left">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tulis pesan..."
                            name="message"
                            onChange={this.handleChange}
                            autoComplete="off"
                          />
                        </div>
                        <div className="col-lg-1 col-3 text-right">
                          <Button className="btn btn-primary" type="submit">
                            Kirim
                          </Button>
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

    return (
      <>
        <Header {...this.props} />
        <div className="container">
          <h4 className="mb-3">Chat</h4>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header"></div>
                <div
                  className="card-body"
                  style={{ height: 500, overflow: "auto" }}
                >
                  {/* <div className="d-flex justify-content-center">
                    <p className="text-gray-600" style={{marginTop: 90}}>Belum Ada Chat Masuk</p>
                  </div> */}
                  {page[match.params.id].map((chat, index) => {
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
                            <p>{chat.message}</p>
                          </div>
                          <div className="col col-lg-2 text-right">
                            <a
                              onClick={()=> {this._delete(chat._id)}}
                              href={`/chat/${chat.freelancerUserId}`}
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
                  <form onSubmit={this._chat}>
                    <div className="row">
                      <div className="col-lg-11 col-9 text-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tulis pesan..."
                          name="message"
                          onChange={this.handleChange}
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-lg-1 col-3 text-right">
                        <Button className="btn btn-primary" type="submit">
                          Kirim
                        </Button>
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
  data: state.chat,
});

export default connect(mapStateToProps, { fetchPage, chat, deleteChat })(
  ChatDetailPage
);
