import "../../App.css";
import Main from "../../components/Main/Main";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import PropTypes from "prop-types";

export const Page = ({ pageName }) => {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Aside />
        <Main pageName={pageName} />
      </div>
    </div>
  );
};

Page.propTypes = {
  pageName: PropTypes.string,
};

export default Page;

