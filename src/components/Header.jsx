
const Header = () => {
  return (
    <header className='header'>
      <img src='data:image/png;base64,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' />
    </header>
  );
}

export default Header;