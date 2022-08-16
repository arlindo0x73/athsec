import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
      <meta name="A Legiao The Hacker Security" description="Empresa que presta serviços de cyber segurança" />
      <link rel="icon" href="/Icons/fav_dark.png" />
      <title>{title}</title>
    </Head>
  );
}

export default Header