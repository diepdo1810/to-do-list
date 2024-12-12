import React, {useState} from "react";
import Button from '@mui/joy/Button';

interface ButtonTodo {
  text: string;
  classNameEl?: string;
  onClick?: () => void;
}

export const ButtonDeleteTodo = (el: ButtonTodo) => {
  const [btn, setBtn] = useState({
    text: el.text,
    classNameEl: el.classNameEl,
    event: el.onClick,
  })

  return (
    <Button size="md" color="danger" className={btn.classNameEl} onClick={btn.event}>
      {btn.text}
    </Button>
  )
}
