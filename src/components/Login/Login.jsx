import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Element} from "./../common/FormsControls/FormsControls";
import {requiredField} from "./../../utils/validators/validators";

const Input = Element("input");

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[requiredField]} component={Input} name={"login"} placeholder={"Login"}/>
      </div>
      <div>
        <Field validate={[requiredField]} component={Input} name={"password"} placeholder={"Password"}/>
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