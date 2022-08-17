import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
      <meta name="A Legiao The Hacker Security" description="Empresa que presta serviços de cyber segurança" />
      <link rel="shortcut icon" href="/Icons/índice.jpg" />
      <title>{title}</title>
    </Head>
  );
}

export default Header