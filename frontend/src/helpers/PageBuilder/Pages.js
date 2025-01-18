import Page from "./Page";

export const Pages = {
  /* Target gui pages */
  MainPage: <Page pageName={"Главная"} />,
  RegisterPage: <Page pageName={"Регистрация"} />,
  LoginPage: <Page pageName={"Вход"} />,
  HotelsPage: <Page pageName={"Все отели"} />,
  RoomsSearchPage: <Page pageName={"Поиск отеля"} />,
  HotelsSearchResultsPage: <Page pageName={"Результаты поиска"} />,
  RoomsSearchResultsPage: <Page pageName={"Пезультаты поиска"} />,
  EditHotelPage: <Page pageName={"Изменить отель"} />,
  EditUserPage: <Page pageName={"Изменить клиента"} />,
  /* Service pages */
  Page404: <Page pageName={"Ошибка 404!"} />,
};

export default Pages;