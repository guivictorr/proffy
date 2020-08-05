import React, {TextareaHTMLAttributes} from 'react';

import './styles.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
  title: string;
  id: string;
}

const TextArea: React.FC<TextAreaProps> = ({title, id, ...rest}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={id}>{title}</label>
      <textarea id={id} {...rest}/>
    </div>
  );
}

export default TextArea;