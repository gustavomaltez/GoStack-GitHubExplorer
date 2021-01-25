import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import { Form, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Dashboard</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">PESQUISAR</button>
      </Form>
    </>
  );
};

export default Dashboard;
