import React, { FormEvent, useState } from 'react';

import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/images/logo.svg';
import api from '../../service/api';
import { Form, Repositories, Title } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`/repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
  }
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Dashboard</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
        />
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

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
