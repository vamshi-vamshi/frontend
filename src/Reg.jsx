import axios from "axios";
import { useState } from "react";

function Reg() {

    const [name, setName] = useState({
        username: "",
        email: "",
        password: ""
    });

    const changeName = (e) => {
        setName({
            ...name,
            [e.target.name]: e.target.value
        });
    };

    const submit = async () => {
        try {
            const res = await axios.post(
                "http://cabsysystem-1.onrender.com/register",
                name   // ✅ use name instead of data
            );
            alert(res.data);
        } catch (xyz) {
            alert(xyz.response?.data || "Error");
        }
    };

    return (
        <>
            <h1>Hey I am App</h1>
            <input onChange={changeName} name="username" placeholder="Enter username" />
            <input onChange={changeName} name="email" placeholder="Enter email" />
            <input onChange={changeName} name="password" placeholder="Enter password" />
            <button onClick={submit}>Register</button>
        </>
    );
}

export default Reg;