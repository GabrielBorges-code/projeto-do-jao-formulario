import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";


const main = () => {
  return (
    <div className="container">
      <Header />
      <h1>Para te conhecer melhor</h1>

      <Form className="form"/>
      <Footer/>
    </div>
  );
};

export default main;
