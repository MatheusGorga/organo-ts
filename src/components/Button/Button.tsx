import React, { ReactElement } from 'react';
import './Button.css';

interface BotaoProps {
  children: ReactElement ,
}

function Button(props: BotaoProps) {
  return <button className='submitForm'>{props.children}</button>;
}

export default Button;
