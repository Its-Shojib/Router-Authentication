import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    let [showPass, setShowPass] = useState(false);
    let navigate = useNavigate();
    let { createUser } = useContext(AuthContext);

    let handleRegister = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log("register succefull");
                console.log(result.user)
                e.target.reset();
                navigate('/');
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="block mx-auto my-5 md:my-20 w-full md:w-5/12">
            <div className="bg-gray-300 w-full mx-auto p-10 space-y-5 rounded-xl">
                <h2 className="text-center text-3xl font-bold">Register Now!</h2>
                <form onSubmit={handleRegister}>
                    <input className="w-full mx-auto p-3 mb-5 rounded-md"
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Your Name" />
                    <input className="w-full mx-auto p-3 mb-5 rounded-md"
                        type="email"
                        name="email"
                        required
                        placeholder="Enter Email" />
                    <div className="relative">
                        <input className="w-full mx-auto p-3 mb-5 rounded-md"
                            type={showPass ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter Password"
                        />
                        <span onClick={() => setShowPass(!showPass)} className="absolute right-5 top-4">
                            {showPass ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                    <button className="bg-green-600 text-white px-5 py-2 block mx-auto rounded-md" type="submit">Register</button>
                </form>
                <p className="my-3 text-center">Already have an account? please <button className="text-white bg-cyan-500 px-3 py-1 rounded-md"><Link to='/login'>Login</Link></button></p>
            </div>
        </div>
    );
};

export default Register;