"use client";
import React, { useEffect, useState } from "react";
import "@/component/form/Form.css";

export default function Form() {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [number, setNumber] = useState("");
  let [city, setCity] = useState("");
  let [province, setProvince] = useState("");
  let [send, setSend] = useState(false)

  useEffect(() =>{
    setTimeout(() =>{
      setSend(false)
    }, 2500)
  }, [send])

  function handleSubmit(e) {
    e.preventDefault();
    if(name && lastName && number && city && province){
      setSend(true)
      setName('')
      setLastName('')
      setNumber("")
      setCity("")
      setProvince('')
    }else{
      setSend(false)
    }
  }

  return (
    <div className="form container">
      <div className="form-cards">
        <div className="form-left">
          <p className="form-title">
            Готовы присоединиться и развиваться вместе с нами?
          </p>
          <p className="form-text">Заполните форму, и мы свяжемся с вами!</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">
                <p>Имя</p>
                <input
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  value={name}
                />
              </label>
              <label htmlFor="lastname">
                <p>Фамилия</p>
                <input
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  value={lastName}
                />
              </label>
            </div>
            <div>
              <label htmlFor="number">
                <p>Номер Телефона</p>
                <input
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  type="number"
                  placeholder="+998"
                  value={number}
                />
              </label>
              <label htmlFor="command">
                <p>Направления</p>
                <select name="" id="">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </label>
            </div>
            <div>
              <label htmlFor="city">
                <p>Город</p>
                <select
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  name=""
                  id=""
                  value={city}
                >
                  <option value="tashkent">Tashkent</option>
                  <option value="samarqand">Samarqand</option>
                  <option value="others">Others</option>
                </select>
              </label>
              <label htmlFor="loc">
                <p>Район</p>
                <select
                  onChange={(e) => {
                    setProvince(e.target.value);
                  }}
                  name=""
                  id=""
                  value={province}
                >
                  <option value="mirobod">Mirobod</option>
                  <option value="chilonzor">Chilonzor</option>
                </select>
              </label>
            </div>
            <div className="form-btn">
              <button>
                {
                  send ? "Oтправлено" : "Отправить"
                }
              </button>
            </div>
          </form>
        </div>
        <div className="form-right">
          <img src="./assets/Frame 811374.png" alt="" />
        </div>
      </div>
    </div>
  );
}
