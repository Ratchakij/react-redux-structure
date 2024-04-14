import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, setUser } from "../slice/auth-slice";

export default function LoginForm() {
  const dispatch = useDispatch();

  const [input, setInput] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await dispatch(login(input)).unwrap();
      console.log(user);
      dispatch(setUser(user));
      /* BY PASS */
      if (input.email === "admin@admin.com" && input.password === "admin") {
        dispatch(setUser());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="w-full"
      sx={{ mt: 3 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={input.email}
            type="email"
            label="Email"
            name="email"
            autoComplete="email"
            fullWidth
            required
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={input.password}
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            onChange={handleChangeInput}
            fullWidth
            required
            /* Add an icon inside the TextField */
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onMouseDown={() => setShowPassword(true)}
                    onMouseUp={() => setShowPassword(false)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} className="flex justify-between items-center">
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me."
          />
          <Link variant="body2" className="cursor-pointer">
            Forgot password?
          </Link>
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
        Sign In
      </Button>
    </Box>
  );
}
