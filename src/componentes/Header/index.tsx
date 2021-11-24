import { Container, Content } from "../Header/styles";
import PontoImg from "../Imagens/Logo.png";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={PontoImg} alt="Ponto" />
        <button value="disable">Colaborador</button>
      </Content>
    </Container>
  );
}
