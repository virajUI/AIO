// import React from 'react';

// const LogoutButton = (props) => {
//   const handleLogout = () => {
//     // Clear user data from local storage
//     localStorage.removeItem('token');
//     localStorage.removeItem('id');
//     localStorage.removeItem('email');

//     // Redirect to login page
//     props.history.push('/login');
//   };

//   return (
//     <button onClick={handleLogout}>
//       Logout
//     </button>
//   );
// };

// export default LogoutButton;

/*
|==========================================================
| How to logout in react js and redirect to login page
|==========================================================
*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  // HANDLE LOGOUT EVENT
  const logout = (e) => {
    e.preventDefault();
    console.log("Logout");

    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();

    navigate("/");
  };

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <Link className="dropdown-item" to="#" onClick={logout}>
        Logout
      </Link>
    </nav>
  );
}

export default Logout;
