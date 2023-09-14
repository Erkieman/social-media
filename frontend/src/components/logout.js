

const clientId = "976830916979-tnfsa93movgd03sbodcd1sjo2r8ph26q.apps.googleusercontent.com";

function LogoutButton(){
    const onSuccess = () => {
        alert('Logout made successfully');
        console.log('Logout made successfully');
    };

    return (
        <div id="signoutButton">
            <GoogleLogout
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
};

export default LogoutButton;