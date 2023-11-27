import React, { useState } from 'react';
import axios from "axios";
import './login.css';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

const AuthForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        isRegistering: false, // Flag to determine whether the form is for registration or login
    });
    const [user, setUser] = useState({
        username: '',
        email: '',
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.isRegistering) {
            await axios.post("http://localhost:8000/allCriminals/register", formData).then((res) => {
                console.log(res)
                toast.success("Registered Successfull", {
                    position: toast.POSITION.TOP_CENTER
                });
                
            }).catch((err) => {
                console.log(err)
                toast.error("Something Went Wrong, Please try again", {
                    position: toast.POSITION.TOP_CENTER
                });
            });
            console.log('Registering:', formData);

        } else {
            await axios.post("http://localhost:8000/allCriminals/login", formData).then((res) => {
                if (res.data) {
                    setUser(res);
                    toast.success('Login Successful', { position: toast.POSITION.TOP_CENTER });
                    setTimeout(() => {
                        navigate('/admin');
                      }, 1000);
                }

            }).catch((err) => {
                console.log(err)
                toast.error('Something Went Wrong, Please try again', { position: toast.POSITION.TOP_CENTER });
            });

        }
    };

    return (
        <div className="main-contain">
             <ToastContainer />
            <Navbar />
            <div className='form-container'>
                <h2>{formData.isRegistering ? 'Register' : 'Login'}</h2>
                <form onSubmit={handleSubmit}>
                    {formData.isRegistering && (
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>
                    )}
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">{formData.isRegistering ? 'Register' : 'Login'}</button>
                </form>
                <p className='p' onClick={() => setFormData({ ...formData, isRegistering: !formData.isRegistering })}>
                    {formData.isRegistering ? 'Already have an account? Login here.' : 'Don\'t have an account? Register here.'}
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default AuthForm;
