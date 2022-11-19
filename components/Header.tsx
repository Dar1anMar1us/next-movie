import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>NextJS</span> Movies App
      </h1>
      <p className={headerStyles.description}>
        This is a test project by Darian Chirca
      </p>
    </div>
  );
};

export default Header;