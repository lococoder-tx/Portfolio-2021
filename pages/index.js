import Home from "../components/Home/Home";
import Head from "next/head";

const index = () => {
  return (
    <div className="container">
      <Head>
        <title>Elijah Gaytan</title>
      </Head>
      <Home></Home>
    </div>
  );
};

export default index;
