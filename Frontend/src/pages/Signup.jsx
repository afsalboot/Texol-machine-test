import React from "react";
import Header from "../components/Header";
import { InputCommon, InputGroup, Label, SignupBox, SignupContainer, Title, InputRadioGroup, Select, InputSelectBox, InputNum, Button, LastContainer, InputRadio, RadioLabel, RadioSubGroup, ErrorMessage } from "../styles/SignupStyles";
import { Link, useNavigate } from "react-router";
import { SignupUser } from "../api";
import { Formik } from "formik";
import * as Yup from "yup";

function Signup() {
  const navigate = useNavigate();

  // Regular expressions for validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    fullname: Yup.string().required("Full name is required"),
    email: Yup.string().matches(emailRegex, "Invalid email format").required("Email is required"),
    password: Yup.string().matches(passwordRegex, "Password must be at least 6 characters & contain a number").required("Password is required"),
    role: Yup.string().required("Role is required"),
    mobile: Yup.string().matches(phoneRegex, "Phone number must be 10 digits & start with 6-9").required("Phone number is required"),
  });

  return (
    <>
      {/* Header component */}
      <Header profile />

      {/* Formik for form handling */}
      <Formik
        initialValues={{ fullname: "", email: "", mobile: "", role: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const signupSubmit = await SignupUser(values);
            if (signupSubmit) {
              navigate("/login"); 
            }
          } catch (err) {
            console.log(err.message);
          } finally {
            setSubmitting(false); 
          }
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <SignupContainer>
              <SignupBox>
                <Title>
                  <span>Register</span>
                </Title>

                {/* Full Name Field */}
                <InputGroup>
                  <Label>Full Name</Label>
                  <InputCommon name="fullname" type="text" placeholder="Enter your name" value={values.fullname} onChange={handleChange} />
                  {errors.fullname && <ErrorMessage>{errors.fullname}</ErrorMessage>}
                </InputGroup>

                {/* Email Field */}
                <InputGroup>
                  <Label>Email</Label>
                  <InputCommon name="email" type="email" placeholder="Enter your email" value={values.email} onChange={handleChange} />
                  {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </InputGroup>

                {/* Mobile Number Field with Country Code */}
                <InputGroup>
                  <Label>Mobile</Label>
                  <InputSelectBox>
                    <Select name="countryCode" value={values.countryCode} onChange={handleChange}>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </Select>
                    <InputNum name="mobile" type="tel" placeholder="Enter your phone number" value={values.mobile} onChange={handleChange} />
                  </InputSelectBox>
                  {errors.mobile && <ErrorMessage>{errors.mobile}</ErrorMessage>}
                </InputGroup>

                {/* Role Selection (Radio Buttons) */}
                <InputRadioGroup>
                  <Label>Current Status</Label>
                  <RadioSubGroup>
                    <RadioLabel>
                      <InputRadio type="radio" name="role" value="Student" checked={values.role === "Student"} onChange={handleChange} />
                      Student
                    </RadioLabel>
                    <RadioLabel>
                      <InputRadio type="radio" name="role" value="Employee" checked={values.role === "Employee"} onChange={handleChange} />
                      Employee
                    </RadioLabel>
                  </RadioSubGroup>
                  {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
                </InputRadioGroup>

                {/* Password Field */}
                <InputGroup>
                  <Label>Password</Label>
                  <InputCommon name="password" type="password" placeholder="Enter Password" value={values.password} onChange={handleChange} />
                  {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                </InputGroup>

                {/* Submit Button */}
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save"}
                </Button>

                {/* Redirect to Login */}
                <LastContainer>
                  Already have an account? <Link to={"/login"}><span>Login Now</span></Link>
                </LastContainer>
              </SignupBox>
            </SignupContainer>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Signup;
