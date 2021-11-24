import { Alert, Container, Content } from "./styles";
import infImg from "../Imagens/info.svg";
import React, { useEffect, useState } from "react";

interface inputProps{
    user:string,
    password:string,
}

export function Body() {

  const [login, setLogin] = useState({
    user:'',
    password:'',
  })

  const handleChange =
   (event: 
    | React.ChangeEvent<HTMLSelectElement> 
    | React.ChangeEvent<HTMLInputElement>
    )=>{
    setLogin(
      {...login, [event.target.name]:event.target.value}
      )
  }

  useEffect(()=>{
  }, [login])


  const handleClick =(event:any)=>{
     event.preventDefault()
     console.log(login)
  }
  

  return (
    <Container>
      <Alert>
        <p>Insira seus dados para acessar sua àrea</p>
        <img src={infImg} alt="infor"/>
      </Alert>

      <Content onSubmit={handleClick}>
        <input 
        type="text" 
        name='user' 
        onChange={handleChange} 
        placeholder="Login"
         />

        <input
          type="password"
          placeholder="Senha"
          name='password'
          onChange={handleChange}
        />
        <button type="submit" >Acessar minha área</button>
        {/* onClick={handleClick} */}
      </Content>

      <a href="https://www.bing.com/search?q=react+alertas&cvid=bd553d37e1d6483fa3079ebd8856c837&aqs=edge..69i57j0.7254j0j1&pglt=43&FORM=ANNTA1&PC=U531">
        Inicie o Point rapidamente. Saiba como!
      </a>
    </Container>
  );
}
