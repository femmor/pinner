import { useState } from "react";
import "./UserButton.css";
import UserOptions from "../UserOptions";

const UserButton = () => {
  const [showUserOptions, setShowUserOptions] = useState(false);

  const currentUser = true;

  const toggleUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  return currentUser ? (
    <div className="user-button">
      <img src="/general/noAvatar.png" alt="noAvatar" className="no-avatar" />
      <img
        src="/general/arrow.svg"
        alt="arrow"
        className="user-button-arrow"
        onClick={toggleUserOptions}
        style={{ transform: showUserOptions ? "rotate(180deg)" : "" }}
      />
      {showUserOptions && <UserOptions />}
    </div>
  ) : (
    <a href="/" className="login-link">
      Login / Sign Up
    </a>
  );
};
export default UserButton;
