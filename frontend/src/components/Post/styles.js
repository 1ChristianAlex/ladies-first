import styled from 'styled-components';
import { Colors } from 'styles';

export const Title = styled.div`
  color: ${Colors.primary};
  font-weight: bold;
  font-size: 22px;
  margin-right: 10px;
`;

export const Small = styled.small`
  color: ${props => (props.dark ? Colors.lightGray : Colors.primary)};
  font-size: 16px;
  margin-right: 10px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
`;

export const HeaderContent = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PostText = styled.article`
  color: ${Colors.text};
  padding: 18px 20px;
  font-size: 20px;
`;

export const PostImage = styled.img`
  width: 100%;
  padding: 10px 0px;
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  > *:not(:first-child) {
    margin-left: 10px;
  }
`;

export const CommentContainer = styled.div`
  margin-top: 30px;
  > * {
    margin-bottom: 8px;
  }
`;
