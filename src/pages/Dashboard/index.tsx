import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import { Title } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Dashboard</Title>
    </>
  );
};

export default Dashboard;
