import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate()
    const [values, setvalue] = useState({
        email: "",
        name: "",
        password: ""
    })
    const [signup, setsignup] = useState(false)
    const [errormsg, seterromsg] = useState("");
    const handlesignup = () => {
        if (!values.name || !values.email || !values.password) {
            seterromsg(toast.error("Required All Fields.."))
            return
        }
        seterromsg("")
        setsignup(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setsignup(false)
                const user = res.user;
                await updateProfile(user, {
                    displayName: values.name,
                })
                navigate("/")
            }).catch((err) => {
                setsignup(false)
                seterromsg(toast.error(err.message))
            })
    }


    return (
        <section className="bg-center bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-vector/desert-forest-landscape-daytime-scene_1308-58176.jpg?w=996&t=st=1675761037~exp=1675761637~hmac=a7eb9795be102521b2395a3330146003defb33dbb49722e9f909f6d3714f105f')]">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="flex flex-col items-center justify-center  backdrop-blur-sm bg-white/5 px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-black">
                    🌤️ WeatherNews
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign up to your account
                        </h1>

                        <div className="space-y-4 md:space-y-6" >
                            <div>
                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                <input onChange={(event) => setvalue((prev) => ({ ...prev, email: event.target.value }))} type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" required="" />
                            </div>
                            <div>
                                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input onChange={(event) => setvalue((prev) => ({ ...prev, name: event.target.value }))} type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user's name" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={(event) => setvalue((prev) => ({ ...prev, password: event.target.value }))} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button type="submit" onClick={handlesignup} disabled={signup} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup