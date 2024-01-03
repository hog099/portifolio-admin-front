import React, { useContext } from "react";
import styles from "./AsideDetails.module.css";

import { AuthContext } from "@/contexts/authContext";

import { DropDownMenu } from "../DropDownMenu/DropDownMenu";

const dataInfo: { info: string; stats: string }[] = [
  { info: "Requisições este mês", stats: "10.926" },
  { info: "Status da API", stats: "ok" },
  { info: "Status do Servidor", stats: "Online" },
  { info: "Uso de Processamento", stats: "12%" },
  { info: "Uso de RAM", stats: "62%" },
  { info: "Memória utilizada", stats: "381Mb/1024Mb" },
];

export const AsideDetails: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user } = useContext(AuthContext);

  return (
    <aside className={styles["aside-container-details"]}>
      <div className={styles["avatar-container"] + " mb-4"}>
        {/* <DropDownMenu title={`${user?.name}`} /> */}
        <DropDownMenu title={"Admin"} />
      </div>
      <ul className={styles["details-list"]}>
        {dataInfo.map(
          (item: { info: string; stats: string }, index: number) => (
            <li key={index} className={styles["details-item"]}>
              <p>
                {item.info}{" "}
                <span className={styles["span-info"]}>{item.stats}</span>
              </p>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};
