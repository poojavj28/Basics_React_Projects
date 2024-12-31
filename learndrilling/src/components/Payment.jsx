import React, { useState } from "react";


export default function Payment({user}) {
    const [click, setClick] = useState(false);
    if(click) {
        return (
            <>
            <h1>Payment Component</h1>
            <h3>{user.username},
                {user.balance}
        </h3>
        <button onClick={() => {setClick(true)}}>Pay</button>
            <h3>Updated Balance: 
                {user.balance - 5000}
            </h3>
            </>
        )
    }
    return (
    <div>
        <h1>Payment Component</h1>
        <h3>{user.username},
                {user.balance}
        </h3>
        <button onClick={() => {setClick(true)}}>Pay</button>
    </div>
    );
}