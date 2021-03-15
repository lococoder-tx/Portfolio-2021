import NavBar from '../components/NavBar';
import Home from '../components/Home/Home';

const index = () => {
  return (
    <>
      <NavBar>
        <div className="container">
          <Home></Home>
        </div>
      </NavBar>
    </>
  );
};

export default index;
