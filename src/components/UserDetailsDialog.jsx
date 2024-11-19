
import React, { useState } from "react";
import placeholder from "../assets/user-placeholder.png"; // Placeholder image
import image from '../assets/image.png'

const UserDetailsDialog = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Trigger Button */}
      <button className="fetch-button" onClick={handleOpen}>
        Fetch Details
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="dialog-overlay">
          <div className="dialog-content">
            <h1 class="font-extrabold">Fetch Details</h1>

            <p style={{ color: "#777" }}>
              Here are the details of the following employee:
            </p>
            <p>
              <b>Name:</b> {user.first_name} {user.last_name}
            </p>
            <p>
              <b>Address:</b> {user.city}
            </p>
            <p>
              <b>Phone:</b> {user.contact_number}
            </p>
            <p style={{ marginTop: "10px" }}>Profile Image:</p>
            <img src={image} alt="Profile" />
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetailsDialog;
