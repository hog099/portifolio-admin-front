import React from "react";
import { FiBell } from "react-icons/fi";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const currentDate = new Date();
  const options:unknown = { weekday: 'long', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('pt-BR', options);

  return (
    <header className={styles["header-container"]}>
      <div className={styles["container"]}>
        <div className={styles["wrapper"]}>
          <span className={styles["today-date"]}>{formattedDate}</span>
          <h2 className={styles["today-date"]}>Bem Vindo!</h2>
        </div>
        <div className={styles["wrapper"]}>
          {/* <span className={styles["img-search"]}>
            <FiSearch size={24} color="#383d49" />
          </span> */}
          <span className={styles["img-notification"]}>
            <FiBell size={24} color="#383d49" />
          </span>
        </div>
      </div>
    </header>
  );
};
