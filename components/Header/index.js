import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
      <meta charset="UTF-8">
      <meta name="description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Detecção e Resposta Gerenciadas, Avaliação de Segurança e Design de Arquitetura de Segurança" />
      <meta name="keywords" content="Cyber Security, MSSP, MDR, ATHSec, Penetration Testing, Security Assements, Cloud, Enterprise, Solution">
      <meta name="author" content="ATHSec">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="/Icons/índice.jpg" />
      <title>{title}</title>
    </Head>
  );
}

export default Header
