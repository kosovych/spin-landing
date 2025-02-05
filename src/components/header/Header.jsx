import Button from '../../shared/Button';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src="assets/icons/logo.svg" alt="Logo"  />
            </div>
            <Button className="header__btn" text="CONNECT WALLET" />
        </header>
    )
};

export default Header;
