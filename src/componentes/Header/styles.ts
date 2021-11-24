import styled from "styled-components";
export const Container = styled.main`
    /* border-bottom: 1px solid darkgray; */
    
`;
export const Content = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    width: 8rem;
    height: 8rem;
  }
  button {
    margin-top: 2rem;
    background-color: white;
    border: 0;
    border-radius:0.25rem 0.25rem 0 0;
    padding: 1rem 2rem;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
