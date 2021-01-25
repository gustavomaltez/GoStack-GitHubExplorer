import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Dashboard</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">PESQUISAR</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars.githubusercontent.com/u/57905553?s=460&u=370ce9e5f08ca8e021cd51ee84e3ba5a82105f89&v=4"
            alt="Gustavo Maltez"
          />

          <div>
            <strong>Example</strong>
            <p>Repository Description</p>
          </div>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
