import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    let [showPassword, setShowPassword] = useState(false);
    let { signInUser,SigninWithGoogle,SigninWithGithub } = useContext(AuthContext);
    let navigate = useNavigate();


    let handleLogin = (e) => {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log('login successful')
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    let handleSigninGoogle =()=>{
        SigninWithGoogle()
        .then(result => {
            console.log('login successful')
            console.log(result.user)
            navigate('/');
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    let handleSigninGithub =()=>{
        SigninWithGithub()
        .then(result => {
            console.log('login successful')
            console.log(result.user)
            navigate('/');
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="block mx-auto my-5 md:my-20 w-full md:w-5/12">
            <div className="bg-gray-300 w-full mx-auto p-10 space-y-5 rounded-xl">
                <h2 className="text-center text-3xl font-bold">Login Here!</h2>
                <form onSubmit={handleLogin}>
                    <input className="w-full mx-auto p-3 mb-5 rounded-md"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Email" />
                    <div className="relative">
                        <input className="w-full mx-auto p-3 mb-5 rounded-md"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter Password"
                        />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-4">
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button className="bg-green-600 text-white px-5 py-2 block mx-auto rounded-md" type="submit">Login</button>
                </form>
                <p className="text-center text-lg">Sign in with</p>
                <div className="flex justify-center items-center gap-5">
                    <button onClick={handleSigninGoogle} className="bg-blue-700 text-white px-4 py-2 rounded-md">Google</button>
                    <button onClick={handleSigninGithub} className="bg-black text-white px-4 py-2 rounded-md">Github</button>
                </div>
                <p className="my-3 text-center">New to this website? please <button className="text-white bg-cyan-500 px-3 py-1 rounded-md"><Link to='/register'>Register</Link></button></p>
            </div>
        </div>
    );
};

export default Login;