export default function Signup() {
    return(
        <>
            <div className="sign-up-form">
            <h2>Sign Up</h2>
            <form>
                <h3>Create your account</h3>
                <div class="group-input">
                    <i class="user"></i>
                    <p>User Name:</p>
                    <input type="text" placeholder="Name"/>
                </div>
                <div class="group-input">
                    <i class="envelope"></i>
                    <p>Email:</p>
                    <input type="Email" placeholder="Email"/>
                </div>
                <div class="group-input">
                    <i class="Lock"></i>
                    <p>Password:</p>
                    <input type="Password" placeholder="Password"/>
                </div>
                <div class="group-input">
                    <i class="Lock"></i>
                    <p>Confirm Password:</p>
                    <input type="Password" placeholder="Password"/>
                </div>
                <button type="submit">Sign Up</button>
            </form>
           </div>
        </>
    )
}
