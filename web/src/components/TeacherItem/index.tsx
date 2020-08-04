import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/48035917?s=400&u=e4b9d99bc4bc5bf5a1dfbdd3fa93ff528a93dfa1&v=4"
          alt="gabriel Carrilhos"
        />
        <div>
          <strong>Gabriel Carrilhos</strong>
          <span>Fisica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de fisica avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida de
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
