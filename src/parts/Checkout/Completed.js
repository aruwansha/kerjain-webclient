import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "assets/images/border.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col">
            <img
              src={CompletedIllustration}
              className="img-fluid mb-4"
              alt="completed"
              style={{height: 300}}
            />
            <p className="text-gray-600">
              We will message you later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
