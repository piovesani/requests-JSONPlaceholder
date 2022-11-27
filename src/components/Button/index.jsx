import './styles.css';

export const Button = ({ text, onClick, disabled }) => {
    return (
        <button 
        className='button' 
        onClick={onClick}
        disabled={disabled}
        >
            {text}
        </button>

    );
}