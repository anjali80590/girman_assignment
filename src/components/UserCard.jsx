import React from "react";
import placeholder from "../assets/user-placeholder.png";
import UserDetailsDialog from "./UserDetailsDialog";

import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={placeholder} alt="User" className="user-image" />

      <div className="user-info">
        <h1 className="user-name">{`${user.first_name} ${user.last_name}`}</h1>
        <div className="user-location">
          <FaMapMarkerAlt style={{ color: "black", marginRight: "5px" }} />
          {user.city}
        </div>
        <div className="flex">
          <div className="user-phone">
            <FaPhoneAlt style={{ color: "black", marginRight: "5px" }} />
            {user.contact_number}
          </div>

          <UserDetailsDialog user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
