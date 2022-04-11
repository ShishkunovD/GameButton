import { Dispatch, SetStateAction } from "react";
import { SButtonContainer } from "./Button.styled";
import { SButton } from "./Button.styled";

type TButton = {
    stateX: number;
    setStateX: Dispatch<SetStateAction<number>>
    stateY: number;
    setStateY: Dispatch<SetStateAction<number>>
}

const Button = ({ 
    stateX,
    setStateX,
    stateY,
    setStateY
}: TButton) => {

  const changeCoordinate = () => {
    setStateX(Math.floor(Math.random() * (95)) + 1);
    setStateY(Math.floor(Math.random() * (95)) + 1);
  }

  return(
    <SButtonContainer onMouseEnter={() => changeCoordinate()} stateX={stateX} stateY={stateY}>
      <SButton onClick={() => alert('Ты победил!!!')}>Нажми на меня!</SButton>
    </SButtonContainer>
  )
}

export default Button;