import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  margin: 0;
  border: 0;
  background-color: red;
  /* height: 100vh; 
   width: 100%;  */

  .nav {
     transition: 0.3s;
     :hover{
      
       width: 14rem;
     }
    display: flex;
    flex-direction: column;

    align-items: center;
    z-index: 0;

    margin: 0;
    border: 0;
    position: fixed;
    width: 5.5rem;
    height: 100vh;
    background-color: #029cd0;

    button{
      border: 0;
      /* height: 2.5rem; */
      :first-child + button{
        margin-top: 2rem;
      }
      /* height: 2rem; */
      background-color: transparent;
    }

    .navImg {
      height: 4.2rem;
      width: 4.2rem;
      margin-top: 1rem;
      margin-bottom: 5.5rem;
    }

    img {
      margin-top: 2rem;
      height: 2rem;
      width: 2rem;
      z-index: 2;
    }
  }
`;

export const Content = styled.div`
  padding-left: 5.5rem;
  width: 100%;
  min-height: 100vh;
  background-color: #e6e6e8;

  .header {
    background-color: #fefefd;
    justify-content: right;
    align-items: center;
    display: flex;
    border: 0;
    height: 3.2rem;
    width: 100%;

    img {
      width: 1.7rem;
      height: 1.7rem;
      margin-right: 1.7rem;
      opacity: 70%;
    }

    p {
      margin-right: 0.5rem;
      opacity: 70%;
      font-size: 1.3rem;
    }
  }

  .body {
    background: transparent;
    display: flex;

    height: 22.6rem;
    width: 100%;
    /* background-color: salmon; */

    .registro-de-pontos {
      display: flex;
      height: 21rem;
      width: 60.5%;
      margin-left: 1.5rem;
      margin-top: 1rem;
      background-color: #fefefd;
      flex-direction: column;

      .registro-cabecalho {
        display: flex;
        height: 4rem;
        margin-left: 2rem;
        margin-right: 2rem;
        border-bottom: 2px solid gray;

        h1 {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          margin-bottom: 0.3rem;
        }
      }

      .registro-corpo {
        width: 100%;
        height: 100vh;

        display: flex;
        flex-direction: row;
      }

      .registro-esquerdo {
        display: flex;
        width: 40%;
        height: 100%;
        flex-direction: column;
        margin-top: 1rem;
        /* justify-content: center; */
        align-items: center;

        .registro-esquerdo2 {
          display: flex;
          flex-direction: column;
          margin-bottom: 3.2rem;
          align-items: center;

          h1 {
            font-size: 3rem;
          }
        }

        a {
          text-decoration: none;
          color: #2e60ff;
          margin-right: 4rem;
        }
      }

      .registro-direito {
        width: 60%;
        flex-direction: column;
        height: 100%;
        /* background-color: gray; */

        .registro-direito-topo {
          display: flex;
          border-bottom: 2px solid gray;
          /* width: 100%; */
          height: 40%;
          flex-direction: row;
          margin-right: 2rem;

          .observacao {
            display: flex;
            height: 100%;
            width: 40%;

            justify-content: flex-end;

            h4 {
              display: flex;
              margin-top: 1rem;
              margin-right: 2rem;
              justify-content: flex-end;
            }
          }

          .opicional {
            display: flex;
            width: 60%;
            height: 100%;

            textarea {
              font-family: "Times New Roman", Times, serif;
              text-align: start;
              width: 17.5rem;
              margin-top: 1rem;
              margin-bottom: 1rem;
              padding-left: 0.8rem;
              padding-right: 0.8rem;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              ::placeholder {
                font-size: 1.2rem;
                font-family: "Times New Roman", Times, serif;
                padding-left: 1rem;
              }
            }
          }
        }

        .registro-direito-baixo {
          display: flex;

          width: 100%;
          height: 60%;

          flex-direction: row;

          button {
            display: flex;
            align-items: center;
            margin-top: 1rem;
            height: 2.5rem;
            width: 6rem;
            border-radius: 4rem;
            justify-content: center;
            background-color: blueviolet;
            border: 0;

            transition: filter 0.2s;

            cursor: pointer;

            :hover {
              filter: brightness(0.8);
            }
          }
          .entrada {
            margin-right: 0.5rem;
            margin-left: 13rem;
            background-color: lightgreen;
          }

          .saida {
            background-color: #e87577;
          }

          .entradaImg {
            margin-right: 0.5rem;
          }

          .saidaImg {
            margin-left: 0.5rem;
          }
        }
      }
    }

    .resultado {
      display: flex;
      height: 21rem;
      width: 35.7%;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      margin-top: 1rem;

      flex-direction: column;
      /* background-color: darkgreen; */

      .primeiro-mes {
        width: 100%;
        /* background-color: aqua; */
        height: 50%;

        .primeiro-mes-topo {
          display: flex;
          width: 100%;
          /* background-color: red; */
          height: 25%;
           
          justify-content: center;
          align-items: center;

          p{
            font-size: 1.5rem;
            font-weight: 600;
          }
        }

        .primeiro-mes-corpo {
          display: flex;
          width: 100%;
          /* background-color: darkgreen; */
          height: 75%;

          .horas{
            font-size: 3rem;
            font-weight: 600;
          }

          flex-direction: row;
         

          .horas-trabalhadas{
            display: flex;
            width: 50%;
            /* height: 100%; */
            flex-direction: column;
            align-items: center;
            
            margin-top: 1rem;
            
            img{
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }

          }

          .horas-previstas{
            display: flex;
            flex-direction: column;
            align-items: center;
            /* background-color: #e87577; */

            margin-top: 1rem;
            width: 50%;
            /* height: 100%; */

            img{
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }
          }
        }
      }

      .segundo-mes {
        width: 100%;
        height: 50%;
        
        .segundo-mes-topo {
          display: flex;
          width: 100%;
          /* background-color: red; */
          height: 25%;
           
          justify-content: center;
          align-items: center;

          p{
            font-size: 1.5rem;
            font-weight: 600;
          }
        }

        .segundo-mes-corpo {
          display: flex;
          width: 100%;
          /* background-color: darkgreen; */
          height: 75%;

          .horas{
            font-size: 3rem;
            font-weight: 600;
          }

          flex-direction: row;
         

          .horas-trabalhadas{
            display: flex;
            width: 50%;
            /* height: 100%; */
            flex-direction: column;
            align-items: center;
            
            margin-top: 1rem;
            
            img{
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }

          }

          .horas-previstas{
            display: flex;
            flex-direction: column;
            align-items: center;
            /* background-color: #e87577; */

            margin-top: 1rem;
            width: 50%;
            /* height: 100%; */

            img{
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }
          }
        }
      }
    }
  }

  .bottom {
    width: 100%;
    min-height: 23rem;
    margin: 0;

    .rodape {
      height: 17rem;
      flex: 1;
      margin-left: 1.5rem;
      margin-right: 2rem;
      margin-top: 0.5rem;
      background-color: #F6F6F6;
      padding: 1.5rem 2rem;

      .registro-atualizado{
        height: 17rem;
        /* background-color: #e87577; */

        .rodape-topo{
          display: flex;
          height: 2rem;
          flex: 1;
          justify-content: center;
            align-items: center;
          
          border-bottom: 2px solid gray;

          p{
            display: flex;
            
            font-weight: 700;
          }
        }
        .rodape-corpo{
          display: flex;
          flex:1;
          margin-top: 1.5rem;
          /* background-color: green; */
          height: 13rem;
          border: 2px solid black;
          flex-direction: column;

        

          span{
            color: white;
            margin-left: 7rem;
          
          }

          details{
            height: 2rem;
            background-color: #2E60FF;

            summary{
              
              
              padding-top:0.6rem;
            }

            p{
              
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
`;
