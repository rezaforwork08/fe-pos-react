import { useNavigate } from 'react-router';
import logo from '../../assets-new/login.svg';
import icon from '../../assets/receipt-logo.png';
const Register = () => {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate('/login');
    }
    return (
        <div className="flex justify-center items-center h-[100vh] w-full bg-blue-500">
            <div className="grid grid-cols-2 bg-white p-5 rounded-xl shadow-xl h-auto">
                <div>
                    <img src={logo} className='w-[500px] h-full' alt="" />
                </div>
                <div className='px-5'>
                    <div className='flex justify-center mt-5'>
                        <img src={icon} alt="logo" className='w-10' />
                    </div>
                    <div className='text-center mt-5'>
                        <h1 className='font-semibold text-3xl'>Welcome back!</h1>
                        <p className='mt-3 text-slate-500'>Enter your details</p>
                    </div>
                    <form action="">
                        <div className='flex flex-col mt-4'>
                            <span className='font-semibold'>Name</span>
                            <input className="outline-none focus:border-blue-500 ring-2 rounded mt-3 p-2" type="text" placeholder='Your Name' />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <span className='font-semibold'>Email</span>
                            <input className="outline-none focus:border-blue-500 ring-2 rounded mt-3 p-2" type="text" placeholder='Email' />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <span className='font-semibold'>Password</span>
                            <input className="outline-none focus:border-blue-500 ring-2 rounded mt-3 p-2" type="password" placeholder='Password' />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <span className='font-semibold'>Confirm Password</span>
                            <input className="outline-none focus:border-blue-500 ring-2 rounded mt-3 p-2" type="password" placeholder='Confirm Password' />
                        </div>
                        <div className='flex flex-col mt-4'>
                            <button className='w-full bg-blue-500 py-2 rounded text-white hover:bg-blue-600'>Register</button>
                        </div>
                    </form>
                    <div className='flex justify-center mt-5 text-sm text-slate-500'>
                        <p>have an account?</p> <button onClick={goToLogin} className='ms-2 hover:font-bold'>Login now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;