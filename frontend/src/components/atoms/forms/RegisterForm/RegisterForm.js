import "./RegisterForm.css";
import { useRef } from "react";
import BackendRequestHandler from "../../../../helpers/BakcendRequestHandler";

export const linkToDropdownRegisterForm = (
  <button
    type="button"
    className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    data-bs-auto-close="outside"
  >
    Зарегистрироваться
  </button>
);

export const RegisterForm = () => {
  const defaultData = {
    email: "test@site.ru",
    password: "123456",
    name: "test",
    contactPhone: "89123456789",
    role: "client",
  };
  const handleSubmit = (data) => {
    console.log("reegister form submitted!");
    const registerUrl = "/api/admin/users";
    BackendRequestHandler(registerUrl, "POST", defaultData);
  };
  return (
    <div className="dropdown">
      <form className="dropdown-menu p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormEmail2" className="form-label">
            Адрес электрронной почты
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormPassword2" className="form-label">
            Придумайте надежный пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dropdownCheck2"
            />
            <label htmlFor="dropdownCheck2" className="form-check-label">
              Запомнить меня
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Регистрация
        </button>
      </form>
    </div>
  );
};

const DropdownRegisterForm = { linkToDropdownRegisterForm, RegisterForm };

export default DropdownRegisterForm;
