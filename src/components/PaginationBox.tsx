import React from 'react';
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FetchImageData } from '../redux/actions/ImageAction';
import { RootReducerType } from '../redux/Store/Store';
import styled from 'styled-components';

const PaginationBox = () => {
  const dispatch = useDispatch();
  const { total } = useSelector((state: RootReducerType) => state.ImageReducer);
  const { searchName, page } = useSelector((state: RootReducerType) => state.SearchNameReducer);

  const pageChange = async (pagination: number) => {
    await dispatch(FetchImageData(searchName, pagination));
    dispatch({ type: 'SEARCH_NAME', payload: { searchName: searchName, page: pagination } });
    window.scrollTo(0, 0);
  };

  return (
    <>
      {total && (
        <Container>
          <Pagination
            defaultCurrent={1}
            current={page}
            total={total}
            showSizeChanger={false}
            defaultPageSize={24}
            onChange={pageChange}
            showPrevNextJumpers
            showQuickJumper
          />
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

export default PaginationBox;
