import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Time from "react-time-format";
import { toast } from "react-toastify";

// action
import { chat, deleteChat } from "store/actions/chat";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

import Button from "elements/Button";

export default function ChatDetailContent({ fetchdata }) {
  const initialState = {
    data: {
      message: "",
    },
  };

  const [state, setState] = useState(initialState);

  const params = useParams();

  const dispatch = useDispatch();

  const message = useRef(null);

  const _chat = () => {
    const { data } = state;
    if (data.message === "") {
      toast.error("Tolong isi fieldnya!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = {
        message: data.message,
      };
      dispatch(chat("freelancer", params.id, payload, getWithExpiry("token")));
    }
    toast.success("Pesan terkirim", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    message.current.value = "";
  };

  const _delete = (id) => {
    dispatch(deleteChat("freelancer", id, getWithExpiry("token")));
    toast.error("Pesan berhasil dihapus", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  if (fetchdata.length === 0)
    return (
      <>
        <div className="container">
          <h1 className="h3 mb-4 text-gray-800">Detail Chat</h1>
          <div className="row">
            <div className="col">
              <div className="card" style={{ height: 300 }}>
                <div className="card-header">
                  <Button
                    type="link"
                    href="/freelancer/chat"
                    className="btn btn-secondary btn-sm"
                  >
                    Back
                  </Button>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <p
                      className="text-gray-600"
                      style={{ marginTop: 90, marginBottom: 80 }}
                    >
                      Belum Ada Chat Masuk
                    </p>
                  </div>
                  <form onSubmit={_chat}>
                    <div className="row">
                      <div className="col-lg-11 col-9 text-left">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tulis pesan..."
                          name="message"
                          onChange={(ev) => {
                            setState({
                              ...state,
                              data: { message: ev.target.value },
                            });
                          }}
                          ref={message}
                          autoComplete="off"
                        />
                      </div>
                      <div className="col-lg-1 col-3 text-right">
                        <Button className="btn btn-primary">Kirim</Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="container">
        <h4 className="mb-3">Detail Chat</h4>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header"></div>
              <div
                className="card-body"
                style={{ height: 500, overflow: "auto" }}
              >
                {fetchdata.map((chat, index) => {
                  return (
                    <div className="form-group" key={`key-${index}`}>
                      <div className="row">
                        <div className="col">
                          <label
                            htmlFor=""
                            className="text-primary font-weight-bold mr-1"
                          >
                            {chat.from.name}
                          </label>
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
                            onClick={() => {
                              _delete(chat._id);
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
                <form>
                  <div className="row">
                    <div className="col-lg-11 col-9 text-left">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Tulis pesan..."
                        name="message"
                        onChange={(ev) => {
                          setState({
                            ...state,
                            data: { message: ev.target.value },
                          });
                        }}
                        ref={message}
                        autoComplete="off"
                      />
                    </div>
                    <div className="col-lg-1 col-3 text-right">
                      <button
                        type="button"
                        onClick={_chat}
                        className="btn btn-primary"
                      >
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
    </>
  );
}
