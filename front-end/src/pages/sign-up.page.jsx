import { SignUp } from '@clerk/clerk-react'
import Navigation from '@/components/Navigation/Navigation';
function SignUpPage(){
    return(
        <main>
            <Navigation />
            <div className='flex justify-center items-center h-screen'>
            <SignUp />
            </div>
        </main>
    );
}

export default SignUpPage;