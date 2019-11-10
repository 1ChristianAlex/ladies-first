import React from 'react';
import { SearchBar, Post } from 'components';

import { AdsWrapper } from './styles';

const SearchSidebar = () => {
  const ads = [
    {
      title: 'Arquitetura BH',
      time: 'Nova vaga disponível',
      text: '"Venha fazer parte do nosso time!!" :)'
    },
    {
      title: 'Beatriz Alves',
      time: 'Nova publicação',
      text: '"Belo dia pra reunião com elas...'
    },
    {
      title: 'Vagas pra você',
      time: 'Vagas recentes',
      text: '"Nós da Lilith Store buscamos...'
    }
  ];

  return (
    <>
      <SearchBar />
      <AdsWrapper>
        {ads.map((ad, index) => (
          <Post key={index} smaller title={ad.title} time={ad.time} text={ad.text} />
        ))}
      </AdsWrapper>
    </>
  );
};

SearchSidebar.defaultProps = {};

SearchSidebar.propTypes = {};

export default SearchSidebar;
