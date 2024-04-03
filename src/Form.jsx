import axios from 'axios';
import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        profile: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
            // [e.target.name]: e.target.value
        });
    };


    /**Sent Json data on backend */
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const responsedata = await axios.post('http://hostname:port/apiname', formData)
            if (responsedata.status == 200) {
                alert('Data successfully inseted')
            }
        } catch (error) {
            console.log(error)
        }
    };
    const uploadFileOnBackend = async (e) => {
        e.preventDefault();
        const formdata = new FormData();

        formdata.append('username', formData.username);
        formdata.append('password', formData.password);
        formdata.append('profile', formData.profile);
        console.log({ formdata })
        // try {
        //     const responsedata = await axios.post('http://hostname:port/apiname', formdata)
        //     if (responsedata.status == 200) {
        //         alert('Data successfully inseted')
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    };



    return (
        <div className="form-container">
            <form onSubmit={uploadFileOnBackend} className="custom-form">
                <div className="form-group">
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
                <div className="form-group">
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
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="file"
                        id="profile"
                        name="profile"
                        onChange={(e) => setFormData({ ...formData, profile: e.target.files[0] })}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
