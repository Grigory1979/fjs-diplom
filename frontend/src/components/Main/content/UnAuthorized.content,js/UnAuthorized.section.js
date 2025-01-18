import {
    linkToDropdownLoginForm,
    LoginForm,
  } from "../../../atoms/forms/LoginForm/LoginForm";
  import {
    linkToDropdownRegisterForm,
    RegisterForm,
  } from "../../../atoms/forms/RegisterForm/RegisterForm";
  
  export const UnAuthorizedSection = () => {
    return (
      <section className="container ">
        <h1>Ой!..</h1>
        <p>
          К сожалению, незарегистрированным пользователям не разрешено
          просматривать данный контент. Однако, безвыходных ситуаций не бывает!
        </p>
        <div>
          Вы можете {linkToDropdownLoginForm} или {linkToDropdownRegisterForm}
          <LoginForm />
          <RegisterForm />
        </div>
      </section>
    );
  };
  
  export default UnAuthorizedSection;