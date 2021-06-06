import React from "react";
import BrandIcon from "./BrandIcon";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function Footer() {
  return (
    <Fade>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <BrandIcon style={{ fontSize: 24 }} />
              <p className="text-gray-800">
                Temukan Jasa terbaik <br /> sesuai kebutuhan anda
              </p>
            </div>
            <div className="col-4">
              <h5 className="text-center">About Us</h5>
              <Button type="link">
                <p className="text-center text-gray-800" style={{ margin: 0 }}>
                  Kebijakan Privasi
                </p>
              </Button>
              <Button type="link">
                <p className="text-center text-gray-800" style={{ margin: 0 }}>
                  Syarat dan Ketentuan
                </p>
              </Button>
            </div>
            <div className="col-4">
              <h5 className="text-right">Contact</h5>
              <p className="text-right text-gray-800">
                support@kerja.in <br />
                0858 5427 0625
              </p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col text-center copyrights">
              <p className="text-gray-600" style={{ fontSize: 14 }}>
                Copyright 2021 • All rights reserved • KerjaIn
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
