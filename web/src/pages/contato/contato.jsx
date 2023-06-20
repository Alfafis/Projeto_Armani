import React from "react";
import bgTeacher from "../../assets/images/bg_teacher.png";
import "./contato.module.css"; // Importando o arquivo CSS específico da página de contato

const Contato = () => {
  return (
    <aside>
      <img src={bgTeacher} alt="Imagem do Professor" />
      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/teamarmanni_diego/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link" // Adicionando a classe "instagram-link"
        >
          @teamarmanni_diego
        </a>
        <br />
        <br />
        <br />
        <br />
        Entre em contato através do nosso whatsapp:{" "}
        <a
          href="https://wa.me/5522989652365"
          target="_blank"
          rel="noopener noreferrer"
          className="highlight-link" // Adicionando a classe "highlight-link"
        >
          Enviar Mensagem
        </a>
      </p>
    </aside>
  );
};

export default Contato;
