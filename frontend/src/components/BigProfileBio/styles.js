import styled from 'styled-components';
import { Colors } from 'styles';

export const Container = styled.div`
  width: 100%;
  background: ${Colors.primary};
  padding: 30px 100px 60px 100px;
  margin-bottom: -30px;
  border-radius: 50px 50px 0px 0px;
  color: ${Colors.white};
  font-size: 20px;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  margin-bottom: 20px;
  margin-top: -100px;

  > *:not(:first-child) {
    margin-left: 20px;
  }
`;

export const Leafs = styled.p`
  color: ${Colors.primary};
  text-align: center;
  display: block;
  padding-right: 40px;
  padding-bottom: 10px;
`;
