const Button = ({ text, onCLick, className, arrow = true }) => (
    <button onClick={onCLick} className={`button ${className}`}>
        <span className="button__text">{text}</span>
        {arrow && <img className="button_icon" src="../assets/icons/arrow-right.svg" alt="" />}
    </button>
);

export default Button;
