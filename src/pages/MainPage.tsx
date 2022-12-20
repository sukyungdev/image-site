import React from 'react';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <div>
      MainPage<Button>theme</Button>
    </div>
  );
};

const Button = styled.button`
  padding: 10px;
  color: ${(props) => props.theme.colors.link};
`;

export default MainPage;
