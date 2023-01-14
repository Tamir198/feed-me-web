import Header from "../../components/Header/Header";
import LoginMenu from "../../components/LoginMenu/LoginMenu";
import styles from "./Login.module.css";

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <LoginMenu setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
}

export default Login;
