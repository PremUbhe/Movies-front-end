import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const navigation = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post('https://movies-mern-stack-2.onrender.com/authentication/signup', {
                email: email, password: password
            })
            navigation('/')

        } catch (err) {
            setError(err.response.data.error);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen bg-slate-800 text-white">
            <form className="flex flex-col justify-around w-80 h-96 p-3 border rounded" onSubmit={handleSubmit}>
                <header>
                    <h1 className="text-3xl pb-3">Sign Up</h1>
                    <hr />
                </header>
                <div className="flex justify-between">
                    <label htmlFor="email">Email:</label>
                    <input className="text-black p-1"
                        type="text"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex justify-between">
                    <label htmlFor="pass">Password:</label>
                    <input className="text-black p-1"
                        type="text"
                        name='pass'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error &&
                    <div className="text-orange-500 text-center">
                        {error}
                    </div>
                }
                <div className="flex justify-around">
                    <button
                        className="bg-emerald-500 rounded py-2 px-6"
                    >Sign Up</button>
                </div>

            </form>
        </div >
    )
}


export default Signup;