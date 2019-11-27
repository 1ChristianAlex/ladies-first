import React from 'react';
import { Button } from 'components';
import { MenuContainer, MenuNav, MenuNavItem } from './styled';
import { useHistory } from 'react-router-dom';

const JobsMenu = () => {
  const history = useHistory();
  console.log(history);

  return (
    <MenuContainer>
      <MenuNav>
        <MenuNavItem>
          <Button padding="5px 15px" text="Criar Vaga" active={false} />
        </MenuNavItem>
        <MenuNavItem>
          <Button padding="5px 15px" text="Cadastradas" active={false} />
        </MenuNavItem>
        <MenuNavItem>
          <Button padding="5px 15px" text="Descobrir" active={false} />
        </MenuNavItem>
      </MenuNav>
    </MenuContainer>
  );
};
export default JobsMenu;
