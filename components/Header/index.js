import Head from 'next/head'

const Header = ({ title }) =>{
  return (
    <Head>
      <title>Athsec - {title}</title>
      <meta
        name="A Legiao The Hacker Security"
        description="description"
      />
      <link rel="icon" href="/Icons/fav_light.png" />
    </Head>
  );
}

export default Header