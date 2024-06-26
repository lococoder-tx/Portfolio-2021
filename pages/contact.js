import ContactContainer from "../components/ContactContainer";
import Head from "next/head";

const contact = () => {
  return (
    <main className="container">
      <Head>
        <title>Elijah Gaytan - Contact Me</title>
      </Head>
      <section className="contact-me">
        <h1>&rarr; Contact Me &larr;</h1>
        <ContactContainer />
      </section>
    </main>
  );
};

export default contact;
