import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { register } from "../slice/auth-slice";
import { useDispatch } from "react-redux";

const initialRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [input, setInput] = useState(initialRegister);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(register(input)).unwrap();
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
        <Grid item xs={12} sm={6}>
          <TextField
            value={input.firstName}
            name="firstName"
            label="First Name"
            required
            fullWidth
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={input.lastName}
            name="lastName"
            label="Last Name"
            autoComplete="family-name"
            required
            fullWidth
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={input.email}
            type="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            required
            fullWidth
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={input.password}
            name="password"
            label="Password"
            type="password"
            required
            fullWidth
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={input.confirmPassword}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            required
            fullWidth
            onChange={handleChangeInput}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
        Sign Up
      </Button>
    </Box>
  );
}
