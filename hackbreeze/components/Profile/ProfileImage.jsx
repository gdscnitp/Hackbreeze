import React from "react";

const ProfileImage = ({ name, size = "med", className }) => {
  return (
    <span
      className={`rounded-full ${className} flex items-center justify-center ${
        size === "med"
          ? "w-24 h-24"
          : size === "sm"
          ? "w-12 h-12"
          : size === "lg"
          ? "w-36 h-36"
          : ""
      }`}
    >
      {name[0].toUpperCase()}
    </span>
  );
};

export default ProfileImage;
