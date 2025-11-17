import { SignIn } from '@clerk/clerk-react'
import Navigation from '@/components/Navigation/Navigation';
function SignInPage(){
    return(
        <main>
            <Navigation />
            <div className='flex justify-center items-center h-screen'>
                <SignIn />
            </div>
        </main>
    );
}

export default SignInPage;