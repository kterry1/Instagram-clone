import React, {useState, useEffect, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Login = () => {
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === "" || emailAddress === ""; 


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push(ROUTES.DASHBOARD)
        } catch(err) {
            setEmailAddress('');
            setPassword('');
            setError(err.message);
        }
    }

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, [])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="https://p35.f2.n0.cdn.getcloudapp.com/items/2NuEW7mJ/b4d4af5b-df4f-478e-83c9-e8924f76b20d.jpg?source=viewer&v=065afb49bc5d403aacaf846301f96faf" alt="iPhone with Instagram app"/>
            </div>
            <div className="flex flex-col w-2/5">
            <div className="flex flex-col items-center bg-white p-4 border mb-4">
                <h1 className="flex justify-center w-full">
                    <img src="https://p35.f2.n0.cdn.getcloudapp.com/items/KouZN11L/94fb8dfb-baa0-445f-828a-b9ae275a61b9.png?source=viewer&v=c46f54e523f2656d2f518d51623448a0" alt="Instagram" className="mt-2 w-6/12 mb-4"/>
                </h1>
                {error && <p className="mb-4 text-xs text-red-500">{error}</p>}
               <form onSubmit={handleLogin} method="POST">
                    <input aria-label="Enter your email address" value={emailAddress} className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2" type="text" placeholder="Email address" onChange={({target}) => setEmailAddress(target.value)}/>
                    <input aria-label="Enter your password" value={password} onChange={({target}) => setPassword(target.value)} className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2" type="password" placeholder="Password"/>
                   <button type="submit" disabled={isInvalid} className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${ isInvalid && 'cursor-not-allowed opacity-50'
                        }`}>Log In</button>
                </form>
            </div>
            <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
                <p className="text-sm">
                   Don't have an account?{" "}
                   <Link to={ROUTES.SIGN_UP} className="font-bold">
                   Sign Up
                   </Link>
                </p>
            </div>
            </div>
        </div>
    )
};

export default Login;