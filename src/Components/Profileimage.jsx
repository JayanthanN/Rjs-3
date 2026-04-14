import React, { useRef, useState } from "react";
import "./Profileimage.css";

const ProfileImageUpdate = () => {
  const fileInputRef = useRef(null);

  const defaultImage =
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  const [profileImage, setProfileImage] = useState(defaultImage);
  const [isImageUploaded, setIsImageUploaded] = useState(false);

  // Trigger file input
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle image selection and preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      setIsImageUploaded(true);
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="title">Profile Image</h2>

        <img
          src={profileImage}
          alt="Profile"
          className="profile-image"
        />

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />

        {/* Single Button for Upload & Replace */}
        <button className="upload-btn" onClick={handleButtonClick}>
          {isImageUploaded ? "Replace Image" : "Upload Image"}
        </button>
      </div>
    </div>
  );
};

export default ProfileImageUpdate;