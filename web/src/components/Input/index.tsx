import React, {InputHTMLAttributes} from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  title: string;
  id: string;
}

const Input: React.FC<InputProps> = ({title, id, ...rest}) => {
  return (
    <div className="input-block">
      <label htmlFor={id}>{title}</label>
      <input id={id} {...rest}/>
    </div>
  );
}

export default Input;