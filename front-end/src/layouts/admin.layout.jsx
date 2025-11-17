import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ADMIN_EMAIL = "shamikadilshan669@gmail.com";

const AdminLayout = () => {
    const { isLoaded, isSignedIn, user } = useUser();
    
    if (!isLoaded) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh' 
            }}>
                <p>Loading...</p>
            </div>
        );
    }
    
    if (!isSignedIn) {
        return <Navigate to="/sign-in" />;
    }
    
    const userEmail = user?.primaryEmailAddress?.emailAddress || user?.emailAddresses?.[0]?.emailAddress;
    
    if (userEmail !== ADMIN_EMAIL) {
        return (
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                gap: '1rem'
            }}>
                <h1>Access Denied</h1>
                <p>You do not have permission to access this page.</p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>
                    Only administrators can access this area.
                </p>
            </div>
        );
    }
    
    return <Outlet />;
};

export default AdminLayout;

