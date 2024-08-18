import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../hooks/useAuth";


const Login = () => {
            const {signIn, signInWithGoogle, user} = useAuth();
            const navigate = useNavigate();
            useEffect(() => {
                if (user) {
                  navigate('/')
                }
              }, [navigate, user])
            // const {email} = user;
            const handleLogin = e =>{
                e.preventDefault();
                const email =e.target.email.value
                const password =e.target.password.value
                // console.log(email, password)
                signIn(email, password)
                .then(result =>{
                    toast('Login Successfull')
                    e.target.reset();
                })
                .catch(error=>{
                    console.log(error);
                    toast('Your email/password is invalid')

                })
            }

            const handleGoogleSignIn = () =>{
                signInWithGoogle()
                navigate("/")
                .then(result =>{
                    console.log(result.user)
                })
                .catch(error =>{
                    console.log(error)
                })
            }
    return (
        <div className="hero">
            <div className="hero-content flex-col">
                <div className="text-center">
                <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2x">
                <form onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered " required />
                    <label className="label">
                        <a href="#" className="link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>New Here? Please
                    <Link to="/register"><button className="btn btn-link">REGISTER</button></Link>
                </p>
                <div className="divider">Countinue With</div>
                <div className="form-control">
                    <button onClick={handleGoogleSignIn} className="btn btn-primary">GOOGLE</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;