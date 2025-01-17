import React from "react";
import "./FeaturedHealthCheckup.css";
import FhcCardSlider from "./FhcCardSlider";

function FeaturedHealthCheckUp({ data }) {
  // console.log(data);

  var array = data.categories["10386"];

  const [selected, setSelected] = React.useState(0);

  return (
    <div className="featured-health-checkup">
      <div className="featured-header">
        <span className="featured-title">Featured Health Check-ups</span>
        <span className="featured-view">View All</span>
      </div>
      <div className="fhc-slider-parent">
        <div className="fhc-slider">
          {array.map((item, index) => (
            <div
              className={
                index == selected
                  ? "fhc-slider-selected-item"
                  : "fhc-slider-item"
              }
              onClick={() => setSelected(index)}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {data.props[selected] && <FhcCardSlider data={data.props[selected]} />}
    </div>
  );
}

export default FeaturedHealthCheckUp;
