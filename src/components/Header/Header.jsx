import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>SOCIAL NETWORK</div>
      <div className={s.loginBlock}>
        { props.isAuth ? props.login
            : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;