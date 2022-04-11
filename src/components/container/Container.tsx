import { useState } from "react";
import { SContainer } from "./Container.styled";
import Button from "../button/Button";

const Container = () => {

  const [stateX, setStateX] = useState(50);
  const [stateY, setStateY] = useState(50);

  return(
    <SContainer>
      <Button stateX={stateX} setStateX={setStateX} stateY={stateY} setStateY={setStateY}/>
    </SContainer>
  )
}

export default Container;