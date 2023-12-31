import PropTypes from "prop-types";
import css from './Button.module.scss'

export const Button = ({onClick})=> {
    return (
      <button className={css['button']} type='button' onClick={onClick}>Load more</button>
    )
  }

  Button.propTypes = {
    onClick: PropTypes.func
  }
  
export default Button

