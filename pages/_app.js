//fontawesome css dep
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/main.scss';

//next js comps
import Head from 'next/head';
//custom comps
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <title>
          Elijah Gaytan
        </title>
      </Head>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </>
  );
}

export default MyApp;
