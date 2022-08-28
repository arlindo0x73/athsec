import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
    
      <title>{title}</title>
      <link rel="shortcut icon" href="/Icons/índice.jpg" />
      <meta name="description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada">

    </Head>
    
  );
}

export default Header
