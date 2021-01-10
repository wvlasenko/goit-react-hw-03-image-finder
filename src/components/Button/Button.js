import PropTypes from 'prop-types';
import ButtonStl from './Button.module.css';

function Button({ text, buttonAction }) {
  return (
    <div className={ButtonStl.container}>
      <button type="button" onClick={buttonAction} className={ButtonStl.button}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};
export default Button;
