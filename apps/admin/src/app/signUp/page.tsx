"use client";
// import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";
import { BASE_URL } from "../../config";

import axios from "axios";
import { useRouter } from "next/navigation";
function Signup() {
  const router = useRouter();

  const [userName, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [err, setError] = useState('');
  // const userChange
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/admin/signup`,
        {
          username: userName,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        },
      );

      // Check if the response contains a token
      const token = response?.data?.token;

      if (token) {
        // localStorage.setItem('token', token);
        router.push("/home"); // Navigate to the home page or the desired route
        // setSignIn(false)
      } else {
        // setError(response?.data.message || 'An error occurred during signup.');
      }
    } catch (error: any) {
      if (error.response.data.resp == "admin already exists")
        router.push("/home");
      // Navigate to the home page or the desired route

      // Handle network errors or other exceptions here
      // setError('An error occurred during signup.');
      console.error("Error signing up:", error);
    }
  };

  return (
    <>
      <div>no sign up </div>
    </>
  );
}
export default Signup;
