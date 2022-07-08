import React from "react";
import Image from "next/image";
import pruebaloker from "../public/images/pruebaloker.png";
import styles from "../styles/BeerCard.module.css";

export const BeerCard = () => {
  const data = [
    {
      imagen: pruebaloker,
      title: "Juicy Ipa",
      subtitulo: "Lupulada /  Turbia /  Sedosa",
      descripción:
        "Una American IPA con sabores y aromas frutales intensos, cuerpo suave y sensación en boca con textura delicada,turbia. Se percibe menos amargor que en las IPAs tradicionales, pero el lúpulo siempre es dominante.",
      maridaje:
        "Curry de pollo o pescado /  empanadas de carne al verdeo y salsa picante picante /  bruschettas de hongos al ajillo.",
    },
     {
      imagen: pruebaloker,
      title: "Golden",
      subtitulo: "Lupulada /  Turbia /  Sedosa",
      descripción:
        "Una American IPA con sabores y aromas frutales intensos, cuerpo suave y sensación en boca con textura delicada,turbia. Se percibe menos amargor que en las IPAs tradicionales, pero el lúpulo siempre es dominante.",
      maridaje:
        "Curry de pollo o pescado /  empanadas de carne al verdeo y salsa picante picante /  bruschettas de hongos al ajillo.",
    },
  ];

  return (
    <>
      {data.map((el, idx) => (
        <div key={idx} className={styles.container}>
          <Image
            src={el.imagen}
            height={300}
            width={100}
            className={styles.image}
            alt="img not found"
          />
          <div className={styles.title}>{el.title}</div>
          <div className={styles.subtitle}>{el.subtitulo}</div>
          <div className={styles.description}>{el.descripción}</div>
          <ul className={styles.characteristic}>
            <li>
              4% <div>Alcohol</div>
            </li>
            <li>
              22 <div>IBU</div>
            </li>
            <li>
              Medio <div>Amargor</div>
            </li>
            <li>
              473 <div>Cc</div>
            </li>
          </ul>
          <div className={styles.subtitle}>Maridaje:</div>
          <div className={styles.description}>{el.maridaje}</div>
        </div>
      ))}
    </>
  );
};
