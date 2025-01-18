import "./LoginForm.css";
import { useRef } from "react";
import BackendRequestHandler from "../../../../helpers/BakcendRequestHandler";

export const linkToDropdownLoginForm = (
  <button
    type="button"
    className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    data-bs-auto-close="outside"
  >
    Войти
  </button>
);

export const LoginForm = () => {
  const loginCurrentValue = useRef(null);
  const passwordCurrentValue = useRef(null);
  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("login form submitted");
    const preparedRequestData = {
      email: loginCurrentValue,
      password: passwordCurrentValue,
    };
    await BackendRequestHandler(preparedRequestData);
  };

  return (
    <div className="dropdown">
      <form className="dropdown-menu p-4">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="Введите логин"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            placeholder="Введите пароль"
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
        <button
          onClick={submitHandler}
          type="submit"
          className="btn btn-primary"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

const DropdownLoginForm = { linkToDropdownLoginForm, LoginForm };

export default DropdownLoginForm;