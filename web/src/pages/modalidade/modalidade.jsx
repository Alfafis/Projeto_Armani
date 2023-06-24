import React from "react";
import { Link } from "react-router-dom";
import bg_modalidade_jiu from "../../assets/images/bg_modalidade_jiu.png";
import bg_modalidade_kick from "../../assets/images/bg_modalidade_kick.png";
import "./Modalidade.css";

function Modalidade() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <aside
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "800px",
          marginBottom: "50px",
        }}
      >
        <img
          src={bg_modalidade_jiu}
          alt="Modalidade Jiu"
          className="image jiu-image"
          style={{ width: "350px", height: "350px" }}
        />

        <img
          src={bg_modalidade_kick}
          alt="Modalidade Kick"
          className="image kick-image"
          style={{ width: "350px", height: "350px" }}
        />
      </aside>
    </div>
  );
}

export default Modalidade;
