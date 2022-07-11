import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
      <title>ATHSec - {title}</title>
      <meta
        name="A Legiao The Hacker Security"
        description="description"
      />
      <link rel="icon" href="/Icons/fav_light.png" />
    </Head>
  );
}

export default Header