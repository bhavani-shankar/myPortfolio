import React from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const GoToTopButtonStyled = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.textColor};
  border: none;
  border-radius: 30%;
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryColorDark};
  }
`;

const GoToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <GoToTopButtonStyled onClick={scrollToTop}>
      <FaArrowUp />
    </GoToTopButtonStyled>
  );
};

export default GoToTopButton;