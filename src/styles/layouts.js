import styled from "styled-components";

export const MainLayout = styled.div`
  padding: 4.5rem;
  transition: padding 0.3s ease;

  @media screen and (max-width: 900px) {
    padding: 3.5rem 2rem;
  }

  @media screen and (max-width: 600px) {
    padding: 3rem 1rem;
  }

  @media screen and (max-width: 400px) {
    padding: 2.5rem 0.75rem;
  }
`;
export const InnerLayout = styled.div`
  padding: 4.5rem 0;
`;
