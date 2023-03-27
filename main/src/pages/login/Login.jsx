import "./login.scss";
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"

const Login = () => {

    const {login} = useContext(AuthContext)

    const handleLogin = () => {
        login()
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Get Connected</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.
                    </p>
                    <span>Don't have an account?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;