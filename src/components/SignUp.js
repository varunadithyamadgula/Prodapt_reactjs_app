function SignUp() {
    return(
        <div>
            <h2 style={{ textAlign: "center", color: "blue", padding: "10px" }}>Sign up</h2>
            <form style={{ textAlign: "center", margin: "20px" }}>

                UserName:      <input type="text" required id="username" name="username" /><br /><br />
                Email:     <input type="email" required id="email" name="email" /><br /><br />
                Password:      <input type="password" required id="password" name="password" /><br /><br />
                Confirm Password:      <input type="password" required id="confirm-password" name="confirm-password" /><br /><br />
                Mobile:      <input type="text" required id="Mobile" name="Mobile" /><br /><br />
                <button type='submit' className='btn btn-success' style={{ marginLeft: "10px" }}>Sign Up</button>
            </form>
            <div style={{ textAlign: "center", margin: "20px" }}>
                <p>Already have an account? <a href="/Login">Login</a></p>
            </div>
        </div>
    )
}
export default SignUp;