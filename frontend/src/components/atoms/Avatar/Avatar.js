import "./Avatar.css";

export const Avatar = (props) => {
  const { avatarUrl } = props;
  return (
    <img
      className="Avatar img rounded"
      src={avatarUrl}
      alt="Аватар пользователя"
    />
  );
};

export default Avatar;