import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";
import { Link } from "react-router-dom";
import Alert from "../../components/Alert";

const useStyles = createUseStyles({
  container: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: 16,
  },
  formWrapper: {
    width: 360,
  },
  formHeading: {
    marginBottom: 8,
    lineHeight: 1.4,
    "& h2": {
      fontSize: 24,
    },
    "& p": {
      fontSize: 14,
      color: "#999",
    },
  },
  loginOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      color: "#444",
      fontSize: 14,
    },
  },
  submit: {
    fontSize: 14,
    height: 40,
    width: "100%",
    marginTop: 24,
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
    border: "1px solid #999",
    padding: "0 16px",
    fontFamily: "inherit",
    fontSize: 14,
    "&:focus": {
      borderColor: "#333",
    },
  },
});

const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loaders.auth.login);

  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
  });

  const { isValid } = formState;

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(login(email, password, rememberMe));
  };

  return (
    <div className={classes.container}>
      <div className={classes.formWrapper}>
        <div className={classes.formHeading}>
          <h2>Welcome Back!</h2>
          <p>Log in to continue</p>
        </div>
        <Alert />
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <InputGroup label="Email Adress">
            <Input
              type="email"
              name="email"
              defaultValue="naoufalb99@gmail.com"
              innerRef={register({ required: true })}
            />
          </InputGroup>
          <InputGroup label="Password">
            <Input
              type="password"
              name="password"
              innerRef={register({ required: true })}
            />
          </InputGroup>
          <div className={classes.loginOptions}>
            <label>
              <input type="checkbox" name="rememberMe" ref={register} />
              Remember me
            </label>
            <Link to="#">Forgot password?</Link>
          </div>
          <Button
            type="submit"
            className={classes.submit}
            loading={loading.toString()}
            disabled={!isValid}
          >
            Login
          </Button>
        </form>
      </div>
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
