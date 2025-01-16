import React, { useState } from "react";
import "./ActiveBookings.css";
// Components
export const ActiveBookings = () => {
  const bookings = [
    {
      id: 1,
      userName: "John Do",
      userAvatar: "assets/icons/Avatar.svg",
      status: "CONFIRMED",
      appointmentDate: "2025-01-20",
      startTime: "2025-01-20T10:00:00",
      endTime: "2025-01-20T11:00:00",
      serviceType: "General Checkup",
      testCount: 3,
    },
    {
      id: 2,
      userName: "John De",
      userAvatar: "assets/icons/Avatar.svg",
      status: "CONFIRMED",
      appointmentDate: "2025-01-20",
      startTime: "2025-01-20T10:00:00",
      endTime: "2025-01-20T11:00:00",
      serviceType: "General Checkup",
      testCount: 2,
    },
  ];

  const handleStatusUpdate = (bookingId, newStatus) => {
    console.log(`Booking ${bookingId} updated to ${newStatus}`);
  };

  const [selected, setSelected] = useState(0);

  const handleScroll = (event) => {
    const scrollLeft = event.target.scrollLeft;
    const cardWidth = event.target.firstChild.offsetWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setSelected(newIndex);
  };

  return (
    <>
      <BookingHeader bookingsCount={bookings.length} />
      <div
        className="booking-cards-container"
        onScroll={handleScroll}
        style={{ scrollSnapType: "x mandatory", overflowX: "scroll" }}
      >
        {bookings.map((booking, index) => (
          <div
            className="booking-card"
            key={booking.id}
            style={{ scrollSnapAlign: "center" }}
          >
            <div className="booking-details">
              <BookingDetails
                booking={booking}
                onStatusUpdate={handleStatusUpdate}
              />
              <BookingAppointment booking={booking} />
            </div>
          </div>
        ))}
      </div>
      <div className="indicators">
        {bookings.map((booking, index) => (
          <div
            key={booking.id}
            className={
              index === selected
                ? "item-indicator-selected"
                : "item-indicator"
            }
          ></div>
        ))}
      </div>
    </>
  );
};

export const BookingHeader = ({ bookingsCount }) => (
  <div className="booking-header">
    <div className="booking-header-text">
      Your Active Bookings ({bookingsCount})
    </div>
    <button className="view-all-button" aria-label="View all bookings">
      View All
    </button>
  </div>
);

export const BookingDetails = ({ booking, onStatusUpdate, iconPath }) => (
  <div className="booking-top">
    <div className="booking-detail">
      <div className="booking-user">
        <img
          src={booking.userAvatar}
          alt={`${booking.userName}'s avatar`}
          className="user-avatar"
        />
        <div className="user-name">{booking.userName}</div>
      </div>
      <div className="booking-status-row">
        <img
          src={"assets/icons/Success.svg"}
          alt={`check mark`}
          className="check-mark"
        />
        <div className="booking-status">
          {booking.status === "CONFIRMED"
            ? "Appointment Confirmed"
            : "Appointment Completed"}
        </div>
      </div>
    </div>
    <button
      onClick={() => onStatusUpdate(booking.id, "COMPLETED")}
      className="status-update-button"
      aria-label="Update booking status"
    >
      <img
        src={"assets/icons/chevron_right_blue.svg"}
        alt="Update icon"
        className="update-icon"
      />
    </button>
  </div>
);

export const BookingAppointment = ({ booking }) => {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    });
  const formatTime = (time) =>
    new Date(time).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  return (
    <div className="booking-appointment">
      <div>
        <div className="appointment-date">
          {formatDate(booking.appointmentDate)}
        </div>
        <div className="appointment-day">Wednday</div>
      </div>
      <hr className="booking-devider"></hr>
      <div>
        <div className="appointment-time">
          {formatTime(booking.startTime)} - {formatTime(booking.endTime)}
        </div>
        <div className="appointment-type">{booking.serviceType}</div>
      </div>
      <hr className="booking-devider"></hr>
     <div className="test-count">
     <div className="appointment-tests-count">{booking.testCount}</div>
     <div className="appointment-tests">Lab Tests</div>
     </div>

    </div>
  );
};

export default ActiveBookings;
