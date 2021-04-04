import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} name={"login"} placeholder={"Login"}/>
      </div>
      <div>
        <Field component={"input"} name={"password"} placeholder={"Password"}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} placeholder={"Login"}/> Remember Me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {

  }

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default Login;