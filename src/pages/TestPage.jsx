import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../features/auth/slice/auth-slice";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

export default function TestApiPage() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const testAuth = async () => {
    const { payload } = await dispatch(getUser());
    console.log(payload);
    setUser(payload);
  };

  return (
    <Box component="div" className="bg-white">
      <header className="bg-blue-500 dark:bg-zinc-900 text-white">
        <Typography variant="h4" align="center">
          Test API Page
        </Typography>
      </header>
      <main className="p-4">
        <Box display="flex" flexDirection="column" alignItems="center">
          <img src="https://placehold.co/400x200" alt="API" className="mb-4" />
          <Typography variant="body1" align="center">
            Start testing your API here!
          </Typography>
          {user && (
            <Typography variant="body1" align="center">
              Welcome{" "}
              <span className="font-bold">
                {user.firstName} {user.lastName}
              </span>
            </Typography>
          )}
          <Button
            id="testButton"
            variant="contained"
            className="bg-blue-500 text-white p-2 rounded-lg mt-4"
            onClick={testAuth}
          >
            Test API
          </Button>
          <Typography
            variant="body1"
            align="center"
            mt={4}
            id="responseMessage"
          >
            {/* Display response message here */}
          </Typography>
        </Box>
      </main>
    </Box>
  );
}
