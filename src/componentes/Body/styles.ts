import styled from "styled-components";
export const Container = styled.main`
  margin: 0;
  margin: auto;
  max-width: 40rem;
  border-bottom: 1.5px solid whitesmoke;
  border-top: 1.5px solid whitesmoke;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-bottom: 1.2rem;
    color: white;
  }

`;
export const Alert = styled.div`
  margin: 0;
  margin-top: 1.2rem;
  margin-bottom:1.2rem ;
  display: flex;
  flex-direction: row;

  color: white;

  img {
    margin: 0;
    margin: auto;
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 0.3rem;
  }
`;
export const Content = styled.form`
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  input {
    width: 32rem;
    height: 2.5rem;
    border: 0;
    background-color: white;
    color: black;

    text-align: center;
    border-radius: 0.25rem;

    &:first-child + input {
      margin-top: 1.2rem;
    }
  }

  button {
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.25rem;

    background-color: white;
    color: black;
    width: 10rem;

    transition: filter 0.2s;

    cursor: pointer;

    :hover {
      filter: brightness(0.9);
    }
  }
`;
