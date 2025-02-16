import "./Main.css";

import { BrowserRouter, useRoutes } from "react-router-dom";
import { AppBrowserRoutesArray } from "../../AppBrowserRouter";
import UnAuthorizedSection from "./content/UnAuthorized.content,js/UnAuthorized.section.js";
import LoginSection from "./content/MainForLoginPage.content/Login.section.js";
import RegisterSection from "./content/MainForRegisterPage.content/Register.section.js";

const Main = ({ pageName }) => {
  const routes = useRoutes([
    {
      path: "/",
      element: <UnAuthorizedSection />,
    },
    {
      path: "gui/login/",
      element: <LoginSection />,
    },
    {
      path: "gui/register/",
      element: <RegisterSection />,
    },
  ]);
  return <main className="shadowed_box Main col-7">{routes}</main>;
};

export default Main;
