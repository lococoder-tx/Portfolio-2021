import About from "../components/About/About";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Elijah Gaytan - About</title>
      </Head>
      <div className="container">
        <About></About>
      </div>
    </>
  );
};

export default about;
