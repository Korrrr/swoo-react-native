import React, {FC} from 'react';
import styled from 'styled-components/native';
import Button from '../Button';

import {
  asyncDecrementCreator,
  asyncIncrementCreator,
} from '../../store/countReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';

type TProps = {};

const Counter: FC<TProps> = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.count.count);

  const handleIncrement = () => {
    dispatch(asyncIncrementCreator());
  };

  const handleDecrement = () => {
    dispatch(asyncDecrementCreator());
  };

  return (
    <SContainer>
      <SRow>
        <Button title="+1" onPress={handleIncrement} />
        <SCount>{count}</SCount>
        <Button title="+1" onPress={handleDecrement} />
      </SRow>
    </SContainer>
  );
};

const SContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #004761;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const SRow = styled.View`
  width: 160px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: nowrap;
`;

const SCount = styled.Text`
  flex-shrink: 0;
  width: 160px;
  height: 71px;
  /* white-space: pre-wrap; */
  /* word-wrap: break-word; */
  /* word-break: break-word; */
  position: relative;
  font-weight: 700;
  /* font-family: 'Inter-Bold', 'Inter', sans-serif; */
  color: #8cd6bd;
  font-size: 64px;
  letter-spacing: 0px;
  /* line-height: 1.2; */
  text-align: center;
`;

export default Counter;
