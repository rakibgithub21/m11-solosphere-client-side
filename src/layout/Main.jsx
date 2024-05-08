
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>
        
            {/* Outlet */}
            <Outlet></Outlet>

            {/* footer */}
        </div>
    );
};

export default Main;