import Home from "./Home";
import loginBackground  from '../login-background.webp';

function Login() {
    return(
        <div style={{ backgroundImage: `url(${loginBackground})`, backgroundSize: "cover", height: "100vh" }}>
            <h2 style={{ textAlign: "center", color: "Blue", margin: "50px" }}>
                Login 
            </h2>
            <form>
                <div style={{ textAlign: "center", color: "white", margin: "20px" }}>

                    UserName:  <input type="text" required id="username" name="username" /><br /><br />

                    Password:  <input type="password" required id="password" name="password" /><br /><br />
                    <button type='submit' className='btn btn-primary' style={{ marginLeft: "10px" }} onClick={() => {validateForm()}}>Login</button>
                </div>
                <div style={{ textAlign: "center",color:"white", margin: "20px" }}>
                    <p>Don't have an account? <a href="/SignUp">Sign Up</a></p>
                </div>
            </form>
        </div>
    )
}
function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }
    return true;
}
export default Login;