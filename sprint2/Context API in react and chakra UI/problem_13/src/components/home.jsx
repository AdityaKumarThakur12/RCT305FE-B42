import { useAuth } from '../authContext';

const Main = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div>
            <h2>{isAuthenticated ? 'Welcome back, User!' : 'Please log in to continue.'}</h2>
        </div>
    );
};

export default Main;