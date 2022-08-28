import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/Icons/índice.jpg" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="google-site-verification" content="c40AJCNaZ8H_A-1KGC3BnVXiF2L4JQu38F9aeGYCya8" />

      <meta name="description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada" />
      <meta name="title" content="ATHSec" />
      <meta name="description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://athsec.org/" />
      <meta property="og:title" content="ATHSec" />
      <meta property="og:description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada" />
      <meta property="og:image" content="/Icons/ATHSec-HomePageMeta.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://athsec.org/" />
      <meta property="twitter:title" content="ATHSec" />
      <meta property="twitter:description" content="ATHSec™ é uma empresa de defesa cibernética que fornece Avaliação de Segurança, Design de Arquitetura de Segurança e Detecção e Resposta Gerenciada" />
      <meta property="twitter:image" content="/Icons/ATHSec-HomePageMeta.jpg" />
    </Head>
  );
}

export default Header
