/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Dashboard.module.css";
import { MainTemplate } from "@/components/templates/MainTemplate/MainTemplate";
import { NavLink } from "react-router-dom";
import { FiEdit, FiLock, FiPlus, FiUnlock } from "react-icons/fi";

const activities = [
  { qtd: 3, info: "Solicitações pendentes" },
  { qtd: 12, info: "Aplicativos autenticados" },
  { qtd: 3, info: "Administradores cadastrados" },
];

const listApps = [
  { name: "Actur App", status: 1 },
  { name: "Montui App", status: 0 },
  { name: "Nutiy App", status: 1 },
]

export const Dashboard: React.FC = () => {
  return (
    <MainTemplate>
      <section className={styles["container"]}>
        {activities.map((activity: { qtd: string | number; info: string }, index: number) => (
          <div key={index} className={styles["wrapper"]}>
            <h1>{activity.qtd}</h1>
            <p>{activity.info}</p>
          </div>
        ))}
      </section>

      <section className={styles["container-newapp"]}>
            <p>Aplicativos cadastrados</p>
            <NavLink to={"/"}>
              <FiPlus size={24} color="#F8F8FF" />
              <p className="text-[14px]">Adicionar App</p>
            </NavLink>
          </section>

          {listApps.map((app: any, index: number) => (
            <div key={index} className={styles["content-app-item"]}>
              <h2 className="text-2xl" style={{ margin: 0 }}>{app.name}</h2>
              <div className={styles["content-app-item-options"]}>
                <h3>{app.status == 1 ? "Integrado" : "Integração bloqueada"}</h3>
                {app.status == 1 ? (
                  <span className={styles["app-item-option"]}>
                    <FiUnlock size={24} color="#383d49" />
                  </span>
                ) : (
                  <span className={styles["app-item-option"]}>
                    <FiLock size={24} color="#383d49" />
                  </span>
                )}
                <NavLink to={"/"} className={styles["app-item-option"]}>
                  <FiEdit size={24} color="#383d49" />
                </NavLink>
              </div>
            </div>
          ))}
      
    </MainTemplate>
  );
};
