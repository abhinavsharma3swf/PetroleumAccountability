import {useState} from "react";

type UserLoginProps = {
    onSubmit: (name:string,password:string) => void
}

export const UserLogin = ({onSubmit}:UserLoginProps) => {
 const[userDetail, setUserDetail] = useState({
     username: "",
     password: ""
 });

    const handleSubmit = () => {
        onSubmit(userDetail.username,userDetail.password)
    };

    return(
        <div>
            <h1>User Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Login
                    <input type="text"
                    placeholder="Username"
                    onChange={(e)=>{setUserDetail((prev) => ({
                        ...prev,
                        username: e.target.value
                    }))}}/>
                </label>
                <label>
                    Password
                    <input type="password"
                           placeholder="Password"
                           onChange={(e)=>{setUserDetail((prev) => ({
                               ...prev,
                               password: e.target.value
                           }))}}/>
                </label>
                <button>Login</button>
            </form>


        </div>
    )
}