import { LoginForm } from "../../../atoms/forms/LoginForm/LoginForm";
import AccessController from "../../../../helpers/AccessController";
const LoginSection = () => {
  return (
    <section className="MainSection" name="Login">
      <AccessController>
        <LoginForm />
      </AccessController>
    </section>
  );
};

export default LoginSection;
