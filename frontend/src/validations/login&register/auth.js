import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string(),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required"),
});