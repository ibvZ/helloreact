import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>SOCIAL NETWORK</div>
    </header>
  );
}

export default Header;