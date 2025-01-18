import PropTypes from "prop-types";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export const AccessController = ({ element, allowedRoles }) => {
  const user = useContext(UserContext);
  if (
    allowedRoles.findIndex((allowedRole) => allowedRole === user.role) !== -1
  ) {
    //
    console.log("show element: ", element);
    //
    return <>{element}</>;
  } else {
    //TODO remove following info
    console.info("element blocked");
  }
};

AccessController.propTypes = {
  element: PropTypes.element,
  allowedRoles: PropTypes.array,
};

export default AccessController;