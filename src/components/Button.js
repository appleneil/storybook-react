import React from 'react';
import './button.scss'

export default function Button(props) {
    return (
        <button
            disabled={props.disabled}
            className={props.classes}
            onClick={props.onClick}
            type="button"
        >
            <span className="btn-wrapper">
                {props.label}
            </span>
        </button>
        )
}