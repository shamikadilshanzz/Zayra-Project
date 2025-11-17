import Footer from '@/components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router';

function RootLayout(){
    return(
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );    
}
export default RootLayout;