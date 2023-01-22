import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState();
  const [cpf, setCpf] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [sex, setSex] = useState();
  const [data, setData] = useState();

  const handleForm = (event) => {
    event.preventDefault();
    setData({
      name: name, 
      cpf: cpf, 
      phone: phone, 
      email: email, 
      sex: sex,
    });

    
  } 
  console.log(data);

  useEffect(() => {
    const url = " http://localhost:8080/dados-financeiros"
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }, [data])

  return (
    <div className="row">
      <form onSubmit={handleForm}>
        <label className="col-lg-12">
          Nome <br/>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </label>

        <label className="col-lg-12">
          CPF <br/>
          <input type="text" name="cpf" onChange={(e) => setCpf(e.target.value)} />
        </label>

        <label className="col-lg-12">
          Telefone: <br/>
          <input type="tel" name="phone" onChange={(e) => setPhone(e.target.value)} />
        </label>

        <label className="col-lg-12">
          E-mail: <br/>
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label className="col-lg-12">
          Sexo: <br/>
          <select name="sex" onChange={(e) => setSex(e.target.value)}>
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
          </select>
        </label>

        <div className="d-flex align-center">
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
