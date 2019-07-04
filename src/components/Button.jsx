import React from "react"
import injectSheet from 'react-jss'

const Button = props => (
  <button
    disabled={props.disabled}
    className={props.classes.button}
    onClick={props.onClick}
    type="button"
  >
    {props.children}
  </button>

)

const styles = {
  button: {
    background: (props) => props.color,
    border: '1px solid #b2b2b2',
    borderRadius: '6px',
    color: (props) => (props.dark ? '#000' : '#fff'),
    cursor: 'pointer',
    fontWeight: '700',
    opacity: '0.8',
    padding: '12px 30px',
    transition: '0.3s',
    '&:hover': {
      opacity: '1'
    },
    '&:focus': {
      outline: 'none',
      opacity: '1'
    },
    '&:disabled': {
      opacity: '0.5',
      cursor: 'not-allowed'
    }
  }
}

export default injectSheet(styles)(Button)