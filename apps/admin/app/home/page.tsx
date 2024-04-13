"use client"; // This is a client component
import { Button } from "@gymcents/ui";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loading, logIn } from "../../store";

function Signin() {
  const router = useRouter();
  const [logInn, setLogIn] = useRecoilState(logIn);
  // const [userName, setUser] = useState('');
  const [password, setPassword] = useState("");
  const [load, setLoad] = useRecoilState(loading);
  const { data: session } = useSession();

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
