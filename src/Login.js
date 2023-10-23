import React from 'react';

function Login (props) {
    return (
        <div>
            <h1>LOGIN</h1>

            <form>
                <div>
                    <label htmlFor='username'>USERNAME</label>
                    <input></input>
                </div>
            
                <div>
                    <label htmlFor='password'>PASSWORD</label>
                    <input></input>
                </div>

                <button type='submit' >SUBMIT</button>
            </form>        
        </div>
    )
}

export default Login;