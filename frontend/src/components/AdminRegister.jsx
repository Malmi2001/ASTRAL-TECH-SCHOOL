import React, { useState } from 'react';
import { AdminRegisterContainer, FormContainer, InputField, SubmitButton } from '../styles/AdminRegisterStyles'; // Correct the paths
import axios from 'axios';

const AdminRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSignIn = () => {
 
        console.log('Admin Sign Register:', { email, password });
      };
 
    return (
        <AdminRegisterContainer>
            <h2>Admin Register</h2>
            <FormContainer>
                <InputField
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <SubmitButton to="/admin/dashboard" onClick={(e) => handleRegister(e)}>Register</SubmitButton>
            </FormContainer>
        </AdminRegisterContainer>
    );
};

export default AdminRegister;
