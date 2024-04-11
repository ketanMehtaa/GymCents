"use client"; // This is a client component
import { Button } from "@gymcents/ui";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { loading, logIn } from "../../store";
import Loader from "../loading";

function Signin() {
  const router = useRouter();
  const [logInn, setLogIn] = useRecoilState(logIn);
  // const [userName, setUser] = useState('');
  const [password, setPassword] = useState("");
  const [load, setLoad] = useRecoilState(loading);
  const { data: session } = useSession();

  useEffect(() => {
    const handleSession = async () => {
      if (typeof session !== "undefined") {
        // If session is defined, handle the session logic
        if (session) {
          console.log("user session", session);
          setLoad(false);
          setLogIn(true);
        } else {
          setLoad(false);
          setLogIn(false);
        }
      } else {
        // Handle the loading state until session data is available
        setLoad(true);
      }
    };

    handleSession();
  }, [session, setLoad, setLogIn, router]);

  const handleSignIn = async () => {
    setLoad(true);
    try {
      if (session) {
        setLogIn(true);
        router.push("/addCourse");
        setLoad(false);
      } else {
        setLoad(false);
      }
    } catch (error: any) {
      if (error.response.data.message == "Invalid email or password") {
        console.log("invalid user name and password");

        setLoad(false);
      } else {
        console.error("Error signing up:", error);
      }
    }
  };
  if (load == true) {
    return (
      <>
        <Loader></Loader>
      </>
    );
  }
  return (
    <>
      {session ? <div>Home</div> : <div>please sign in.</div>}

      <div>
        <Button text="Invite" className="h-9" />
        {/* <Button
          icon={<LinkIcon className="h-4 w-4 text-gray-800" />}
          variant="secondary"
          onClick={() => setShowInviteCodeModal(true)}
          className="h-9"
        /> */}
      </div>
    </>
  );
}
export default Signin;
