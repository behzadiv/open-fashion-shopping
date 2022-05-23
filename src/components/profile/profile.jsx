import { useDispatch, useSelector } from "react-redux";
import "./profile.css";
import profile from "../../assets/icons/profile.png";
import logout from "../../assets/icons/logout.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { setAuth } from "../feature/auth/authSlice";
import { render, renderHook } from "@testing-library/react";
const Profile = () => {
  const userData = useSelector((state) => state.auth.data);
  const dispatch = useDispatch()
  const { name, email, phoneNumber } = userData;
    const navigate = useNavigate()
  const logOut = ()=>{
     window.localStorage.removeItem("authState")
     dispatch(setAuth(false))
     navigate("/login")
  }
  console.log("profile rendering.....");
  return (
    <section className="profile-section container">
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={profile} alt="" />
        </div>
        <div className="profile-info-container">
          <p className="profile-info-title">
            Name : <span className="profile-info-desc">{name}</span>
          </p>
          <p className="profile-info-title">
            Email : <span className="profile-info-desc">{email}</span>
          </p>
          <p className="profile-info-title">
            PhoneNumber :{" "}
            <span className="profile-info-desc">{phoneNumber}</span>
          </p>
        </div>
      </div>
      <button className="btn logout-btn" onClick={()=>logOut()}>
        <p>Log out</p>
        <img src={logout} alt="" />
      </button>
    </section>
  );
};

export default Profile;
