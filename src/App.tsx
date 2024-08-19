import { AuthView } from './components/AuthView.tsx';
import { useUser } from './context/User.context.tsx';
import { Combo } from './components/chat/Combo.tsx';

function App() {
    const user = useUser();
    console.log('user', user);
    return <div>{user ? <AuthView /> : <Combo />}</div>;
}

export default App;
