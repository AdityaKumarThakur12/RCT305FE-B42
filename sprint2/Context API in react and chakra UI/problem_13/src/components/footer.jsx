import { useAuth } from "../authContext";

const Footer = () => {
    const { isAuthenticated } = useAuth();

    return (
        <footer>
            <p>{isAuthenticated ? 'Welcome, User' : 'Please log in'}</p>
        </footer>
    );
};

export default Footer;