

const clientId = "976830916979-tnfsa93movgd03sbodcd1sjo2r8ph26q.apps.googleusercontent.com";

function LoginButton() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };
    return (
        <div id="signinButton">
            <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
};

export default LoginButton;