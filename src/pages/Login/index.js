import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authAction";

const useStyles = createUseStyles({
  container: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 360,
  },
  submit: {
    fontSize: 14,
    height: 40,
    width: "100%",
    marginTop: 8,
  },
  inputGroup: {
    marginBottom: 16,
    "& label > p": {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 4,
    },
  },
  input: {
    outline: "none",
    borderRadius: 40,
    height: 40,
    width: "100%",
    border: "1px solid #888",
    padding: "0 16px",
    fontFamily: "inherit",
    fontSize: 14,
  },
});

const Login = () => {
  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const onSubmit = ({ email, password }) => {
    dispatch(login(email, password));
  };
  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <InputGroup label="Email Adress">
          <Input type="text" name="email" innerRef={register} />
        </InputGroup>
        <InputGroup label="Password">
          <Input type="password" name="password" innerRef={register} />
        </InputGroup>
        <Button type="submit" className={classes.submit}>
          Login
        </Button>
      </form>
    </div>
  );
};

const Input = ({ type = "text", className, innerRef, ...props }) => {
  const classes = useStyles();
  className = clsx(className, classes.input);
  return <input {...{ type, className, ...props }} ref={innerRef} />;
};

const InputGroup = ({ children, label }) => {
  const classes = useStyles();
  return (
    <div className={classes.inputGroup}>
      <label>
        <p>{label}</p>
        {children}
      </label>
    </div>
  );
};

export default Login;
