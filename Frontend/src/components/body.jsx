import React, { useState,useRef } from 'react';
import styles from "./body.module.css"

const FormComponent = () => {
    
    // State variables for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        
        
        console.log(name);
        console.log(email);
        console.log(password);
         const data={
            "name":name,
            "email":email,
            "password":password,
                 }

        setError(null);
        setSuccess(null);
        
        
        try {
            const response = await fetch('http://localhost:3000/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log('hii')

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('hello')

           
            console.log('hiimun')
            setSuccess('Form submitted successfully!');
            // Clear form fields if needed
            setName('');
            setEmail('');
            setPass('');
        } catch (err) {
            console.log('err')
            setError("Submission failed!!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>

        <div className={styles.formContainer}>
            <h2 className={styles.heading}>Login</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        id="password"
                       value={password}
                        type='password'
                        onChange={(e) => setPass(e.target.value)}
                        className={styles.textarea}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton} disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                {error && <p className={styles.error}>{error}</p>}
                {success && <p className={styles.success}>{success}</p>}
            </form>
        </div>
        </div>
    );
};

export default FormComponent;