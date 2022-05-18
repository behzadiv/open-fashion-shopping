import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../common/Input";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";
import Badge from "../../common/Badge";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is required!")
    .min(6, "Enter at least 6 char"),
  email: Yup.string().email("Invalid Email").required("email is required!"),
  phoneNumber: Yup.string()
    .required("phoneNumber is required!")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string()
    .required("password is required!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  passwordConfirmation: Yup.string()
    .required("password not match")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirmation: "",
};

const Signup = () => {
  const [error, setError] = useState(null);
  const onSubmit = async (values, actions) => {
    setError(null);
    //console.log(values);
    const { name, email, phoneNumber, password } = values;
    const userData = {
      name,
      email,
      phoneNumber,
      password,
    };
    await axios
      .post("http://localhost:5000/api/user/register", userData)
      .then((response) => {
        actions.resetForm({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
        });
        toast.success("Your signUp is complete");
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
    <section className="signup-container container">
      <h1>Sign Up </h1>
      <Badge />
      <form onSubmit={formik.handleSubmit}>
        <Input name="name" label="Name" formik={formik} />
        <Input name="phoneNumber" label="PhoneNumber" formik={formik} />
        <Input name="email" label="Email" formik={formik} />
        <Input
          name="password"
          label="Password"
          type="password"
          formik={formik}
        />
        <Input
          name="passwordConfirmation"
          label="Password confirm"
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
            <span>Already have an account? </span>
            <NavLink to="/login" style={{textDecoration:"underline"}}>Sign In</NavLink>
          </h2>
        </dir>
      </form>
    </section>
  );
};

export default Signup;
