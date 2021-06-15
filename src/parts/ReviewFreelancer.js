import React from "react";

import Star from "elements/Star";

import Fade from "react-reveal/Fade";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ReviewFreelancer({ data }) {
  return (
    <section id="ReviewFreelancer" className="container">
      <Fade bottom>
        <h3 className="mt-2" style={{ fontWeight: 600, marginBottom: 24 }}>
          Ulasan
        </h3>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          removeArrowOnDeviceType = 'mobile, desktop'
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {data.review.map((review, index) => {
            return (
              <div className="row" key={`review-${index}`}>
                <div className="col-lg-10 col-sm-12 mr-2">
                  <div className="card card-featured"  style={{height: 230}}>
                   <div className="meta-wrapper">
                      <div className="row">
                        <div className="col">
                          <p
                            className="text-gray-800"
                            style={{ margin: 0, fontSize: 14 }}
                          >
                            {review.userId[0].name}
                          </p>
                          <Star value={review.rating} width={20} height={20} />
                        </div>
                      </div>
                      <h6 className="text-gray-700">{review.description}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Fade>
    </section>
  );
}
