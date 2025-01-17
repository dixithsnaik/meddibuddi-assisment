import React from "react";
import "./UserReview.css";

function UserReview({ data }) {
  

  // console.log(data);

  let revs = data.props;

  return (
    <div className="Reviews-MAIN">
      <h1 className="Reviews-Title">{data.title}</h1>

      <div className="Reviews-Container">
        <div className="Reviews-slider">
          {revs.map((rev, index) => {
            return (
              <div key={index} className="Reviews-Card">
                <div className="Reviews-Card-Top">
                  <div className="Reviews-Card-Top-1">
                    <div className="Reviews-Card-Stars">
                      {Array.from({ length: rev.rating }, (_, index) => (
                        <i key={index} className="star">
                          <img src="/assets/icons/rating-star.svg" alt="star" />
                        </i>
                      ))}
                    </div>
                    <div className="Reviews-Card-Date">{rev.days}</div>
                  </div>
                  <div className="Reviews-Card-Top-2">
                    {rev.location && (
                      <>
                        <img
                          className="Reviews-Card-Img"
                          src="/assets/icons/location-light.svg"
                          alt="location"
                        />
                        <div className="Reviews-Card-Location">
                          {rev.location}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="Reviews-Card-Rev">
                  <h1 className="Reviews-Card-h1">{rev.content}</h1>
                </div>
                <hr />
                <div className="Reviews-Card-Bottom">
                  <img
                    className="Reviews-Card-Img"
                    src="/assets/icons/avatar-2.svg"
                    alt="avatar"
                  />
                  <div className="Reviews-Card-Name">{rev.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserReview;
