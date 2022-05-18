import {useFormik} from"formik"
import { NavLink } from "react-router-dom";
import * as Yup from"yup"
import Input from "../../common/Input";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import Badge from "../../common/Badge";
import "./Login.css"
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
    const onSubmit = async (values, actions) => {
        setError(null);
        console.log(values);
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
            toast.success("login succesfully");
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
