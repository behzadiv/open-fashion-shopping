import {useFormik} from"formik"
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from"yup"
import Input from "../../common/Input";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import Badge from "../../common/Badge";
import "./Login.css"
import { useQuery } from "../../hooks/useQuery";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../feature/auth/authSlice";
const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("email is required!"),
    password: Yup.string()
      .required("password is required!")
  });
  const initialValues = {
    email: "",
    password: "",
  };
const Login = () => {
    const [error,setError]=useState(null)
    const query =useQuery()
    const redirect  = query.get("redirect") || "/login"
    const auth = useSelector(state=>state.auth.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if(auth)navigate(redirect)
    },[auth,redirect])
    const onSubmit = async (values, actions) => {
        setError(null);
        //console.log(values);
        const { email, password } = values;
        const userData = {
          email,
          password,
        };
        await axios
          .post("http://localhost:5000/api/user/login", userData)
          .then((response) => {
            actions.resetForm({
              email: "",
              password: "",
            });
            localStorage.setItem("authState",JSON.stringify(response.data))
            toast.success("login succesfully");
            dispatch(setAuth(response.data))
          })
          .catch((err) => {
            console.log(err.response);
            if (err.response && err.response.data.message) {
              setError(err.response.data.message);
              toast.error(err.response.data.message);
            }
          });
      };
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true,
      }); 
  return (
    <section className="login-container container">
      <h1>Sign in </h1>
      <Badge />
      <form onSubmit={formik.handleSubmit}>
        <Input name="email" label="Email" formik={formik} />
        <Input
          name="password"
          label="Password"
          type="password"
          formik={formik}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <dir className="submit-container">
          <button
            type="submit"
            className={
              formik.isValid ? "btn btn-primary" : "btn submitNotActive"
            }
            disabled={!formik.isValid}
          >
            Submit
          </button>
          <h2>
            <span>Don't have an account? </span>
            <NavLink to="/signup" style={{textDecoration:"underline"}}>Sign Up</NavLink>
          </h2>
        </dir>
      </form>
    </section>
  );
};

export default Login;
