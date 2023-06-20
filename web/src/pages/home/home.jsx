import React from "react";
import styles from "../../pages/home/home.module.css";
import { useMediaQuery } from "react-responsive";

import bgTeacher from "../../assets/images/bg_teacher.png";

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <aside className={styles.container}>
        {isDesktop && (
          <img
            src={bgTeacher}
            alt="Imagem do Professor"
            className={styles.desktopImage}
          />
        )}
        {isTablet && (
          <img
            src={bgTeacher}
            alt="Imagem do Professor"
            className={styles.tabletImage}
          />
        )}
        {isMobile && (
          <img
            src={bgTeacher}
            alt="Imagem do Professor"
            className={styles.mobileImage}
          />
        )}
        <div>
          <label className={styles.label}>CENTRO DE TREINAMENTO</label>
          <h2 className={styles.title}>TEAM ARMANNI</h2>
        </div>
      </aside>
    </>
  );
};

export default Home;
