import SignIn from "./components/SignIn.tsx";
import {AuthView} from "./components/AuthView.tsx";
import {useUser} from "./context/User.context.tsx";

function App() {
    const user = useUser();
    console.log("user", user)
    return (
        <div>
            {user ? <AuthView /> : <SignIn />}
        </div>

    );
}

export default App;
