import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [birthDate, setBirthDate] = useState();
  const [sex, setSex] = useState();
  const [data, setData] = useState();
  const [recipient, setRecipient] = useState();

  const handleForm = (event) => {
    event.preventDefault();

    setData({
      name: name,
      cpf: cpf,
      email: email,
      phone: phone,
      birthDate: birthDate,
      sex: sex,
      recipient: recipient,
    });

    dataSave();
  };

  console.log(data)

  const dataSave = () => {
    const url = " http://localhost:8080/dados-responsavel";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="row form-group">
      <h3>Dados do responsável financeiro</h3>

      <form onSubmit={handleForm}>
        <label className="col-lg-12 w-100 my-2">
          Nome do responsável financeiro: <br />
          <input
            className="form-control w-100 my-2"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
          />
        </label>

        <label className="col-lg-12 my-2">
          CPF responsável financeiro: <br />
          <input
            className="form-control w-100 my-2"
            type="text"
            name="cpf"
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF"
          />
        </label>

        <label className="col-lg-12 my-2">
          Email responsável financeiro: <br />
          <input
            className="form-control w-100 my-4"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="usuario@unotelemdicina.com.br"
          />
        </label>

        <label className="col-lg-12 my-2">
          Telefone responsável financeiro: <br />
          <input
            className="form-control w-100 my-4"
            type="tel"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ex: (DDD) XXXX-XXXX"
          />
        </label>

        <label className="col-lg-12 my-2">
          Data de nascimento responsável financeiro: <br />
          <input
            className="form-control input-group date"
            type="date"
            name="birthDate"
            max="2100-12-31"
            min="1970-12-31"
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </label>

        <label className="col-lg-12 my-2">
          Sexo do responsável financeiro: <br />
          <select
            className="w-100 form-select"
            name="sex"
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </label>

        <label className="col-lg-12 my-2">
          O responsável financeiro também será beneficiário do plano? <br />
          <select
            className="w-100 form-select"
            name="recipient"
            onChange={(e) => setRecipient(e.target.value)}
          >
            <option value="sim">Sim</option>
            <option value="não">Não</option>
          </select>
        </label>

        <button className="btn btn-primary my-4">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
