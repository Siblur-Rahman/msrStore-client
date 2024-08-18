import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
    const {user, logOut} = useAuth()
    console.log(user)
    const { pathname } = useLocation()
    const navLinks =[
        {
            title:"HOME",
            path:'/'
        },
        {
            title:"Register",
            path:"/register"
        }
    ]
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {
                navLinks.map(link=><Link key={link.path} className={`text-3xl ${pathname === link.path && 'text-cyan-500'}`} to={link.path}>{link.title}</Link>)
            }
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost text-xl">MSR-Store</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-4">
            {
                navLinks.map(link=><Link key={link.path} className={`text-3xl ${pathname === link.path && 'text-cyan-500'}`} to={link.path}>{link.title}</Link>)
            }
    </ul>
  </div>
  <div className="navbar-end">
    {user? <a className="btn text-3xl" onClick={logOut}>Log Out</a> : <Link to={'/login'} className={`btn text-3xl ${pathname === '/login' && 'text-cyan-500'}`} >Login</Link>}
  </div>
</div>
    );
};

export default Navbar;