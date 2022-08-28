import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
      // <!-- Primary Meta Tags -->
      <meta name="title" content="ATHSec">
      <meta name="description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada">

      // <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website">
      <meta property="og:url" content="https://athsec.org/">
      <meta property="og:title" content="ATHSec">
      <meta property="og:description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada">
      <meta property="og:image" content="/Icons/ATHSec-HomePageMeta.jpg">

      // <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="https://athsec.org/">
      <meta property="twitter:title" content="ATHSec">
      <meta property="twitter:description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada">
      <meta property="twitter:image" content="/Icons/ATHSec-HomePageMeta.jpg">
    
      <link rel="shortcut icon" href="/Icons/índice.jpg" />
      <title>{title}</title>
    </Head>
  );
}

export default Header
