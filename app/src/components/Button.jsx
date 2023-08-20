//ボタンを設定します
import React from 'react';

const Button = (props) => { // ここをpropsに変更
    const {
        text,
        ...other
    } = props; // ここもpropsに変更
    return (
        <button {...other}>
            {text}
        </button>
    );
};

export default Button;