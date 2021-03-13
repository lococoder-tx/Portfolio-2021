import NavBar from '../components/NavBar';
import Home from '../components/Home/Home';

const index = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Home></Home>
      </div>
    </>
  );
};

export default index;
