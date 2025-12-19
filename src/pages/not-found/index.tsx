import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@phosphor-icons/react';

import notFoundImg from '../../assets/not_found.png';

import { HeadlineContentContainer, NotFoundContainer } from './styles';

export function NotFound() {
  return (
    <NotFoundContainer>
      <HeadlineContentContainer>
        <div>
          <h1>Página não encontrada...</h1>
          <p>Parece que não há nada por aqui...</p>
          <p>Deseja retornar à página inicial?</p>
        </div>
        <Link to="/">
          <ArrowLeftIcon size={24} />
          Voltar
        </Link>
      </HeadlineContentContainer>
      <img src={notFoundImg} alt="Página não encontrada" />
    </NotFoundContainer>
  );
}
