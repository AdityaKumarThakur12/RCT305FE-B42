import { useAuth } from '../authContext';

const Navbar = () => {
    const { isAuthenticated, login, logout } = useAuth();

    return (
        <nav>
            <h1>Auth Context App</h1>
            <button onClick={isAuthenticated ? logout : login}>
                {isAuthenticated ? 'Logout' : 'Login'}
            </button>
        </nav>
    );
};

export default Navbar;