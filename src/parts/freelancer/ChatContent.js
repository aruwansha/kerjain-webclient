import React from "react";
import { useDispatch } from "react-redux";
import Time from "react-time-format";
import { toast } from "react-toastify";

// action
import { deleteAllChat } from "store/actions/chat";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

import Button from "elements/Button";

export default function ChatContent({ data }) {
  const dispatch = useDispatch();

  const _delete = (id) => {
    dispatch(deleteAllChat("freelancer", id, getWithExpiry("token")));
    toast.success(id, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  if (data.chats.message === "no chat yet")
    return (
      <>
        <div className="container">
          <h1 className="h3 mb-4 text-gray-800">Daftar Chat</h1>
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
      </>
    );
  return (
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
              {data.chats.chats.map((chat, index) => {
                return (
                  <div className="form-group" key={`key-${index}`}>
                    <div className="row">
                      <div className="col col-lg-10">
                        <label
                          htmlFor=""
                          className="text-primary font-weight-bold mr-1"
                        >
                          {chat.doc.serviceUserId[0].name}
                        </label>
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
                          href={`/freelancer/chat/${chat.doc.serviceUserId[0]._id}`}
                        >
                          Balas
                        </Button>
                        <br />
                        <a
                          onClick={() => {
                            _delete(chat.doc.serviceUserId[0]._id);
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
  );
}
