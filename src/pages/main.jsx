import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";

const main = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h2>Para te conhecer melhor</h2>
        <p>Insira as suas informações e das pessoas que você vai cuidar</p>
        <p>Quantas pessoas vão utilizar o serviço? (incluindo você)</p>

        <Form className="form" />
      </div>
      <Footer />
    </>
  );
};

export default main;
