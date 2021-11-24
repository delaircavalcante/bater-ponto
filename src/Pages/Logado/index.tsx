import mensagemImg from "../../componentes/Imagens/mail.svg";
import { Container, Content } from "./styles";
// import voltarImg from "../../componentes/Imagens/voltar.png";
// import editarImg from "../../componentes/Imagens/edit.svg"

import voltarImg2 from "../../componentes/Imagens/voltar2.svg";
import editarImg2 from "../../componentes/Imagens/edit2.svg";
import baixarImg from "../../componentes/Imagens/baixar.svg";
import navImg from "../../componentes/Imagens/Nav.png";
import relogioImg from "../../componentes/Imagens/relogio.svg";

import entradaImg from "../../componentes/Imagens/entrar.svg";
import saidaImg from "../../componentes/Imagens/saida.svg";
import { useEffect, useState } from "react";

export function Logado() {
  const [data, setData] = useState({
    hora: new Date().getHours(),
    minuto: new Date().getMinutes(),
    segundos: new Date().getSeconds(),
  });

  useEffect(() => {
    setInterval(
      () =>
        setData({
          hora: new Date().getHours(),
          minuto: new Date().getMinutes(),
          segundos: new Date().getSeconds(),
        }),
      1000
    );
  });

  return (
    <Container>
      <div className="nav">
        <img className="navImg" src={navImg} alt="topo do nav" />
        
         <button>   
        <img src={editarImg2} alt="editar" />
        </button>
        <button>
        <img src={voltarImg2} alt="voltar" />
        </button>
      </div>
      <Content>
        {/* HEADER */}
        <div className="header">
          <img src={mensagemImg} alt="mail" />
          <p>ENG. ALAN ARAUJO</p>
          <img src={baixarImg} alt="imagem" />
        </div>

        {/* BODY */}
        <div className="body">
          <div className="registro-de-pontos">
            <div className="registro-cabecalho">
              <h1>Registro de ponto</h1>
            </div>

            <div className="registro-corpo">
              <div className="registro-esquerdo">
                <div className="registro-esquerdo2">
                  <h4>Relógio</h4>
                  <h1>
                    {data.hora}: {data.minuto}: {data.segundos}
                  </h1>
                  <h4>Sobral/CE</h4>
                </div>
                <a href=";;yuilk">DICAS PARA USO</a>
              </div>
              <div className="registro-direito">
                <div className="registro-direito-topo">
                  <div className="observacao">
                    <h4>Observação</h4>
                  </div>
                  <div className="opicional">
                    <textarea
                      name="textarea"
                      rows={5}
                      cols={30}
                      placeholder="Opcional"
                    ></textarea>
                  </div>
                </div>
                <div className="registro-direito-baixo">
                  <button className="entrada">
                    <img
                      className="entradaImg"
                      src={entradaImg}
                      alt="entrada"
                    />
                    <span>Entrada</span>
                  </button>
                  <button className="saida">
                    <span>Saida</span>
                    <img className="saidaImg" src={saidaImg} alt="saida" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="resultado">
            <div className="primeiro-mes">
              <div className="primeiro-mes-topo">
                <p>Novenbro 2021</p>
              </div>
              <div className="primeiro-mes-corpo">
                <div className="horas-trabalhadas">
                  <div className="grupo-horas">
                    <img src={relogioImg} alt="relogio" />
                    <span>Horas trabalhadas</span>
                  </div>
                  <div className="horas">110:45</div>
                </div>
                <div className="horas-previstas">
              
                <div className="grupo-horas2">
                  <img src={relogioImg} alt="relogio" />
                  <span>Horas previstas</span>
                </div>
                <div className="horas">110:45</div>
              </div>
              </div>
            </div>

           
            <div className="segundo-mes">
            <div className="segundo-mes-topo">
                <p>Outubro 2021</p>
              </div>
            <div className="segundo-mes-corpo">
            <div className="horas-trabalhadas">
                  <div className="grupo-horas">
                    <img src={relogioImg} alt="relogio" />
                    <span>Horas trabalhadas</span>
                  </div>
                  <div className="horas">11:45</div>
                </div>

                <div className="horas-previstas">
              
              <div className="grupo-horas2">
                <img src={relogioImg} alt="relogio" />
                <span>Horas previstas</span>
              </div>
              <div className="horas">110:45</div>
            </div>
                
               </div> 
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom">
          <div className="rodape">
            <div className="registro-atualizado">
              <div className="rodape-topo">
                <p>Registro de hoje</p>
              </div>
              <div className="rodape-corpo">
                <details>
                  <summary>
                    <span>Data</span>
                      <span>Previstas</span>
                        <span>Trabalhadas</span>
                        <span>Abonos</span>
                        <span>Intervalo</span>
                        <span>Saldos</span>
                          
                  </summary>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ex pariatur illum ut exercitationem, placeat sunt sequi numquam reiciendis cumque officia nihil accusantium veritatis quo magnam consequatur! Harum, nemo vitae.</p>
                </details>
              </div>
            </div>
            </div>
        </div>
      </Content>
    </Container>
  );
}
