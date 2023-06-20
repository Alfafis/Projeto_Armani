import React from "react";
import styles from "./about.module.css";
import bg_quemsomos_v2 from "../../assets/images/bg_quemsomos_v2.png"; // Importe a imagem corretamente
import { useMediaQuery } from "react-responsive";

function About() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <aside
        className={`${styles.container} ${
          isDesktop
            ? styles.desktop
            : isTablet
            ? styles.tablet
            : isMobile
            ? styles.mobile
            : ""
        }`}
      >
        <p className={styles.about}>
          O Team Armanni é um centro de treinamento dedicado à arte marcial,
          nascido de um sonho que se tornou realidade em outubro de 2020.
          <br />
          Nosso objetivo é proporcionar um ambiente inclusivo, onde todos possam
          se desenvolver e crescer. Com o apoio de amigos e familiares,
          trabalhamos incansavelmente para oferecer um espaço amplo e equipado,
          no qual podemos nos dedicar ao que amamos.
          <br /> Ao longo do tempo, evoluímos constantemente, aprimorando nossa
          estrutura e expandindo nossa equipe. Enfrentamos desafios, superamos
          obstáculos e contamos com o apoio essencial dos alunos, que se
          tornaram verdadeiros companheiros e bênçãos em nossa jornada.
          <br /> Hoje, temos mais de trinta alunos ativos, formando competidores
          e participando de eventos de luta, enquanto gradualmente conquistamos
          nosso espaço e ganhamos reconhecimento no meio marcial. <br />
          Acreditamos nos valores fundamentais da arte marcial: respeito,
          disciplina e honra. Esses princípios nos inspiram a lutar sempre,
          dentro e fora dos tatames. Venha fazer parte do Team Armanni e
          embarque em uma jornada de autodesenvolvimento e crescimento pessoal.
          Desafie-se, supere-se e junte-se a uma equipe apaixonada pela luta e
          pela superação. <br />
          Aqui, acreditamos que todos têm o potencial de superar seus limites e
          alcançar seus objetivos. <br /> Nossa comunidade acolhedora e
          motivadora está pronta para recebê-lo de braços abertos.
        </p>
        <img
          src={bg_quemsomos_v2}
          alt="quem somos"
          className={styles.bg_quemsomos_v2} // Use a classe correta definida no arquivo CSS
        />
      </aside>
    </>
  );
}

export default About;
