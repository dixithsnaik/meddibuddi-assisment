import React from "react";

function FeaturedHealthCheckUp() {
return (
    <div className="featured-health-checkup">
        <div className="featured-header">
            <span>Featured Health Check-ups</span>
            <span>View All</span>
        </div>
        <div className="featured-card">
            <div className="card-header">
                <span>Medibuddy Fit health check-up</span>
                <span className="sponsored">Sponsored</span>
            </div>
            <div className="card-details">
                <span>90 Tests</span>
                <div className="tests">
                    • Cholesterol - Total <br /> • Vitamin D... + 87 more
                </div>
            </div>
            <div className="card-footer">
                <span>₹0</span>
                <div className="quantity">
                    <button>-</button>
                    <input type="text" value="1" readOnly />
                    <button>+</button>
                </div>
            </div>
        </div>
    </div>
);
}

export default FeaturedHealthCheckUp;
