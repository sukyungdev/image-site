import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch, BsFillSuitHeartFill, BsCamera2 } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { FetchImageData } from '../redux/actions/ImageAction';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();

  const SearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);
    // console.log(searchName);
  };

  const fetchSearchImageData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(FetchImageData(searchName, 1));
    dispatch({ type: 'SEARCH_NAME', payload: { searchName: searchName, page: 1 } });
    setSearchName('');
  };

  const navigate = useNavigate();

  return (
    <Container>
      <HeaderBox>
        <LogoBox>
          <Logo
            onClick={() => {
              dispatch(FetchImageData());
              navigate('/');
            }}
          >
            <BsCamera2 size={35} />
          </Logo>
        </LogoBox>
        <FormBox>
          <Form onSubmit={fetchSearchImageData}>
            <Input onChange={SearchHandler} value={searchName} placeholder="Search photo!" />
            <Button type="submit">
              <BsSearch />
            </Button>
          </Form>
        </FormBox>
        <IconButton
          onClick={() => {
            navigate('/favoritePage');
          }}
        >
          <BsFillSuitHeartFill />
        </IconButton>
      </HeaderBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const HeaderBox = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1em;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  @media (min-width: 368px) {
    padding: 0 2em;
  }
`;

const LogoBox = styled.div`
  flex-grow: 1;
`;

const Logo = styled.div`
  display: flex;
  width: 35px;
  align-items: center;
  cursor: pointer;
  color: #3d3d3d;
  &:hover {
    color: black;
  }
`;

const FormBox = styled.div`
  flex-grow: 0.5;
`;

const Form = styled.form`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 25px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 25px;
  font-size: 16px;
  padding: 10px 40px 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Button = styled.button`
  position: absolute;
  top: 2px;
  right: 0;
  width: 50px;
  height: 100%;
  font-size: 18px;
  color: ${(props) => props.theme.colors.iconColor};
  &:hover {
    color: black;
  }
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: ${(props) => props.theme.colors.iconColor};

  &:hover {
    color: ${(props) => props.theme.colors.favorite};
  }
`;

export default Header;
