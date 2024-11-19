import React from "react";
import placeholder from "../assets/user-placeholder.png"; // Placeholder image
import UserDetailsDialog from "./UserDetailsDialog"; // Dialog for details
// import Modal from "./Modal";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      {/* Profile Image */}
      <img src={placeholder} alt="User" className="user-image" />

      {/* User Info Section */}
      <div className="user-info">
        <h1 className="user-name">{`${user.first_name} ${user.last_name}`}</h1>
        <div className="user-location">
          {/* <span className="location-icon">📍</span> */}
          <FaMapMarkerAlt style={{ color: "black", marginRight: "5px" }} />
          {user.city}
        </div>
        <div className="flex">
          <div className="user-phone">
            {/* <span className="phone-icon">📞</span> */}
            <FaPhoneAlt style={{ color: "black", marginRight: "5px" }} />
            {user.contact_number}
          </div>

          {/* Fetch Details Button */}
          <UserDetailsDialog user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
