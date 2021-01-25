import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header } from './styles';
import logoImg from '../../assets/images/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <Header>
      <img src={logoImg} alt="GitHub Explorer" />
      <Link to="/">
        <FiChevronLeft size={20} />
        Voltar
      </Link>
    </Header>
  );
};

export default Repository;
