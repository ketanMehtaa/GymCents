"use client";
import { BASE_URL_ADMIN_PRISMA } from "@/config";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loader from "../loading";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
function Profile() {
  const { data: session, status } = useSession();
  const initialFormData = {
    // @ts-ignore
    name: session?.user.name,
    // @ts-ignore
    email: session?.user.email,
  };

  useEffect(() => {
    const fetchData = async () => {
      // Wait until the session is available
      if (status === "authenticated" && session) {
        // Set the initial form data based on the user's session
        setFormData({
          // @ts-ignore
          name: session.user.name,
          // @ts-ignore
          email: session.user.email,
        });
      }
    };

    fetchData();
  }, [status, session]);

  // const handleChange = (event: any) => {
  //   const { id, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [id]: value,
  //   });
  // };
  const handleChange = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const [formData, setFormData] = useState(initialFormData);
  const saveProfile = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL_ADMIN_PRISMA}/api/profile`,
        { formData },
        {
          headers: {
            "Content-type": "application/json",
          },
        },
      );
      console.log("response call", response);

      // setIsLoading(false);
      // setError('');
      // setFormData(initialFormData);
    } catch (error: any) {
      // setIsLoading(false);
      // setErro('Error creating course: ' + error?.message);
    }
  };
  if (status === "authenticated") {
    return (
      <>
        <div className="flex min-h-[80vh] items-center justify-center">
          <div className="grid-row grid items-center  justify-center gap-10 border-4 p-10 shadow-md">
            {/* <div>{session ? JSON.stringify(session.user) : null}</div> */}
            <TextField
              label="Name"
              name="name"
              id="outlined-size-normal "
              defaultValue={formData.name}
              onChange={handleChange}
            />
            {/* <div>{session?.user?.name}</div> */}

            <div className="grid grid-cols-2  items-center  ">
              <img
                className="rounded-full  "
                src={session?.user?.image || ""}
                alt="photo"
              />
              <Button
                className="h-10 line-through	"
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>

            <TextField
              label="email"
              name="email"
              id="outlined-size-normal "
              defaultValue={formData.email}
              onChange={handleChange}
            />
            {/* <div>{session?.user?.email}</div> */}

            <Button
              variant="outlined"
              className="bg-gray"
              onClick={() => saveProfile()}
            >
              save
            </Button>
          </div>
        </div>
      </>
    );
  } else
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <Loader></Loader>
      </div>
    );
}

export default Profile;
