import PropTypes from "prop-types";

export const BackendRequestHandler = async (url, method, data) => {
  const APP_URL = process.env.APP_URL;
  const APP_PORT = process.env.APP_PORT;
  const REQUEST_URL_STRING = `${APP_URL}/${APP_PORT}`;
  try {
    const result = await fetch(`${REQUEST_URL_STRING}${url}`, method, data);
    return result;
  } catch (error) {
    console.error("В процессе отправки запроса возникла ошибка!", error);
  }
};

BackendRequestHandler.PropTypes = {
  method: PropTypes.string,
  data: PropTypes.object,
};

export default BackendRequestHandler;