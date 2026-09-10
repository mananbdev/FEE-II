import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <>
      <h1>Login page </h1>
      <button onClick={handleClick}>Login</button>
    </>
  );
}
