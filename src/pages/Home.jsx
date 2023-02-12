import React from 'react'
import Sidebar from '../component/Sidebar';
import Container from '../component/Container';
import Footer from '../component/Footer';


const Home = (props) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Container name={props.name}/>
      </div>
      <Footer />
    </>
  );
}

export default Home