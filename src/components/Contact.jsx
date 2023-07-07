
import { useState } from "react";
import "../styles/Contact.css"
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can store the data in the dashboard route, such as making an API call or updating the state in the dashboard component.
        // For this example, we'll just log the data to the console.
        console.log({ name, email, number });

        // Reset form fields
        setName('');
        setEmail('');
        setNumber('');
    };
    return (
        <div className="conatiner-con">
            <h1>contact page</h1>

            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enteer your name' name={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" placeholder='Enteer your email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="text" placeholder='Enteer your number' onChange={(e) => setNumber(e.target.value)} value={number} />
                    <br />
                    <button className="btn" value="submit">submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact