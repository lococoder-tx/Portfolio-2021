import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/main.scss";
import Layout from "../components/layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

// {/* // <Head>

//       // </Head> */}
