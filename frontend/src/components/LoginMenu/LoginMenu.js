import styles from "./LoginMenu.module.css";

var isUserRegistered = false;

function LoginMenu() {
  return (
    <form className="form">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">{isUserRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default LoginMenu;
