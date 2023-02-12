import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const [values, setvalue] = useState({
        email: "",
        password: ""
    })
    const [login, setlogin] = useState(false)
    const [errormsg, seterromsg] = useState("");

    const handleloggedin = () => {
        if (!values.email || !values.password) {
            seterromsg(toast.error("Required All Fields.."))
            return
        }
        seterromsg("")
        setlogin(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setlogin(false)
                navigate("/")
            }).catch((err) => {
                setlogin(false)
                seterromsg(toast.error(err.message))
            })
    }

    return (
        <section className="bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-vector/desert-forest-landscape-daytime-scene_1308-58176.jpg?w=996&t=st=1675761037~exp=1675761637~hmac=a7eb9795be102521b2395a3330146003defb33dbb49722e9f909f6d3714f105f')]">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="flex flex-col items-center justify-center px-6 backdrop-blur-sm bg-white/5  py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-black">
                    🌤️ WeatherNews
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Log in to your account
                        </h1>
                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input onChange={(event) => setvalue((prev) => ({ ...prev, email: event.target.value }))} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user1234" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={(event) => setvalue((prev) => ({ ...prev, password: event.target.value }))} type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" onClick={handleloggedin} disabled={login} className="w-full text-white bg-yellow-500 hover:bg-yellow-600 text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login