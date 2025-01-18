import { createContext } from "react";
import PropTypes from "prop-types";

export const defaultUser = {
  name: "Гость",
  role: "GuestRole",
  //role: "UserRole",
  //role: "ManagerRole",
};
export const UserContext = (user) => {
  if (user === undefined) {
    createContext(defaultUser);
    return;
  }
  createContext(user);
  return;
};

UserContext.propTypes = {
  user: PropTypes.object,
};

export default UserContext;