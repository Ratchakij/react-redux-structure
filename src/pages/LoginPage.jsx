import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import reactLogo from "../assets/React-Logo.png";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";

const defaultTheme = createTheme();

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="md"
        className="h-screen flex flex-col justify-between"
      >
        <CssBaseline />
        <Box className="h-screen my-8 px-12 py-4 flex flex-col justify-between rounded-lg bg-white">
          <Box className="flex flex-col items-center">
            {/* LOGO */}
            <Box
              component="img"
              src={reactLogo}
              alt="React logo"
              height="12vh"
            />
            <Typography fontWeight="bold" fontSize="32px" color="primary">
              My Website
            </Typography>
            <Typography fontWeight="500" sx={{ mb: "1.5rem" }}>
              Welcome to My Website, the website for everyone!
            </Typography>
            <Typography variant="h4">
              {isLogin ? "Sign in" : "Sign Up"}
            </Typography>

            {/* FORM */}
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </Box>

          {/* SWITCH FORM */}
          <Grid container className="flex justify-end">
            {/* {isLogin && (
              <Grid item xs>
                <Link variant="body2" className="cursor-pointer">
                  Forgot password?
                </Link>
              </Grid>
            )} */}
            <Grid item>
              <Link
                variant="body2"
                className="cursor-pointer"
                onClick={() => {
                  setIsLogin(!isLogin);
                }}
              >
                {isLogin
                  ? "Don't have an account? Sign Up"
                  : "Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </Box>

        {/* FOOTER */}
        <Box className="w-full text-center py-4">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} My Website. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
