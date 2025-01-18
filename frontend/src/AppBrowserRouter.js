import { createBrowserRouter } from "react-router-dom";
import Pages from "./helpers/PageBuilder/Pages";
import RegisterSection from "./components/Main/content/MainForRegisterPage.content/Register.section";
import LoginSection from "./components/Main/content/MainForLoginPage.content/Login.section";

export const AppBrowserRoutesArray = [
  {
    name: Pages.MainPage.props.pageName,
    path: "/",
    element: Pages.MainPage,
    loader: null,
    allowedRoles: ["GuestRole", "AdminRole", "UserRole", "ManagerRole"], //TODO inspect roles
    MainContent: null,
  },
  {
    name: Pages.MainPage.props.pageName,
    path: "/gui",
    element: Pages.MainPage,
    loader: null,
    allowedRoles: ["GuestRole"], //TODO inspect roles
    MainContent: null,
  },
  {
    name: Pages.RegisterPage.props.pageName,
    path: "/gui/auth/register/",
    element: Pages.RegisterPage,
    loader: null,
    allowedRoles: ["GuestRole"],
    MainContent: <RegisterSection />,
  },
  {
    name: Pages.LoginPage.props.pageName,
    path: "/gui/auth/login/",
    element: Pages.LoginPage,
    loader: null,
    allowedRoles: ["GuestRole"],
    MainContent: <LoginSection />,
  },
  {
    name: Pages.HotelsPage.props.pageName,
    path: "/gui/hotels",
    element: Pages.HotelsPage,
    loader: null,
    allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
  },
  {
    name: Pages.RoomsSearchPage.props.pageName,
    path: "/gui/rooms/search",
    element: Pages.RoomsSearchPage,
    loader: null,
    allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
  },
  {
    name: Pages.RoomsSearchResultsPage.props.pageName,
    path: "/gui/rooms/search/results",
    element: Pages.RoomsSearchResultsPage,
    loader: null,
    allowedRoles: ["AdminRole", "UserRole", "ManagerRole"],
  },
  {
    name: Pages.EditHotelPage.props.pageName,
    path: "/gui/hotels/:id/edit",
    element: Pages.EditHotelPage,
    loader: null,
    allowedRoles: ["AdminRole", "ManagerRole"],
  },
  {
    name: Pages.HotelsSearchResultsPage.props.pageName,
    path: "/gui/hotels/search/results",
    element: Pages.HotelsSearchResultsPage,
    loader: null,
    allowedRoles: ["AdminRole", "ManagerRole", "UserRole"],
  },
  {
    name: Pages.EditUserPage.props.pageName,
    path: "/gui/users/:id/edit",
    element: Pages.EditUserPage,
    loader: null,
    allowedRoles: ["AdminRole"],
  },
];

const preparedRoutesArray = AppBrowserRoutesArray.map((object) => {
  if (object.MainContent) {
    delete object.MainContent;
  }
  delete object.name;
  delete object.allowedRoles;
  return object;
});

export const AppBrowserRouter = createBrowserRouter(preparedRoutesArray);
const RouterObject = { AppBrowserRouter, AppBrowserRoutesArray };

export default RouterObject;