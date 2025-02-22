import "./NavMenu.css";
import { v4 as uuid } from "uuid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../../contexts/UserContext";
import AccessController from "../../../helpers/AccessController";

const NavMenu = (props) => {
  const menuItems = [
    {
      text: "Все отели",
      target: "/gui/hotels/all",
      allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
    },
    {
      text: "Поиск номера",
      target: "/gui/hotels/search",
      allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
    },
    {
      text: "Добавить отель",
      target: "/gui/hotels/add",
      allowedRoles: ["AdminRole", "ManagerRole"],
    },
    {
      text: "Пользователи",
      target: "/gui/hotels/add",
      allowedRoles: ["AdminRole", "ManagerRole"],
    },
    {
      text: "Войти",
      target: "/gui/auth/login/",
      allowedRoles: ["GuestRole"],
    },
    {
      text: "Зарегистрироваться",
      target: "/gui/auth/register/",
      allowedRoles: ["GuestRole"],
    },
  ];
  const user = useContext(UserContext);
  //
  console.log("NavMenu user: ", user);
  //
  return (
    <ul className="NavMenu">
      {menuItems.map((item) => {
        return (
          <li className="NavMenu__item" key={uuid()}>
            <AccessController
              element={<NavLink to={item.target}>{">" + item.text}</NavLink>}
              allowedRoles={item.allowedRoles}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;

