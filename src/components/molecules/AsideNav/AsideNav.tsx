import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiUser, FiUsers } from "react-icons/fi";

import styles from "./AsideNav.module.css";

import { Logo } from "@/components/atoms/Logo/Logo";
import PATHS from "@/routes/paths";

const SIZEICON = 20;

export const AsideNav: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  
  return (
    <aside className={styles["aside-container-nav"]}>
      <div className={styles["container-logo"]}>
        <Logo />
      </div>

      <nav className={styles["aside-nav"]}>
        <ul className={styles["aside-ul"]}>
          <li className={styles["aside-li"]}>
            <div className={styles["navlink-container"] + ` ${pathname.includes(PATHS?.dashboard.index) ? "aside-active-menu" : " "}`}>
              <NavLink className="active" to={PATHS?.dashboard.index}>
                <FiHome size={SIZEICON} color="#383d49" />
                Dashboard
              </NavLink>
            </div>
          </li>
          {/* <li className={styles["aside-li"]}>
            <div className={styles["navlink-container"] + ` ${pathname.includes(PATHS?.activities.index) ? "aside-active-menu" : " "}`}>
              <NavLink className="active" to={PATHS?.activities.index}>
                <FiActivity size={SIZEICON} color="#383d49" />
                Atividade
              </NavLink>
            </div>
          </li> */}
          {/* <li className={styles["aside-li"]}>
            <div className={styles["navlink-container"] + ` ${pathname.includes(PATHS?.reports.index) ? "aside-active-menu" : " "}`}>
              <NavLink className="active" to={PATHS?.reports.index}>
                <FiBarChart size={SIZEICON} color="#383d49" />
                Relatórios
              </NavLink>
            </div>
          </li> */}
          <li className={styles["aside-li"]}>
          <div className={styles["navlink-container"] + ` ${pathname.includes(PATHS?.users.index) ? "aside-active-menu" : " "}`}>
              {/* <NavLink className="active" to={PATHS?.users.index}> */}
              <NavLink className="active" to={"/"}>
                <FiUsers size={SIZEICON} color="#383d49" />
                Usuários
              </NavLink>
            </div>
          </li>
          <li className={styles["aside-li"]}>
            <div className={styles["navlink-container"] + ` ${pathname.includes(PATHS?.profile.index) ? "aside-active-menu" : " "}`}>
              {/* <NavLink className="active" to={PATHS?.profile.index}> */}
              <NavLink className="active" to={"/"}>
                <FiUser size={SIZEICON} color="#383d49" />
                Perfil
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>

      <div className={styles["support-message"]}>
        <h3 className="font-bold my-2">Contate o suporte</h3>
        <p>Entre em contato com o suporte da plataforma para tirar dúvidas ou solucionar possíveis problemas.</p>
      </div>
    </aside>
  );
};
