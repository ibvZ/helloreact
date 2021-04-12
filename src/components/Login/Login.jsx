import s from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Element} from "./../common/FormsControls/FormsControls";
import {requiredField} from "./../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "./../common/FormsControls/FormsControls.module.css"

const Input = Element("input");

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field validate={[requiredField]} component={Input} name={"login"} placeholder={"Login"}/>
      </div>
      <div>
        <Field validate={[requiredField]} component={Input} name={"password"} placeholder={"Password"}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"} type={"checkbox"} placeholder={"Login"}/> Remember Me
      </div>
      { error && <div className={styles.formSummaryError}>{error}</div> }
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.login, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <div className={s.login}>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {login})(Login);