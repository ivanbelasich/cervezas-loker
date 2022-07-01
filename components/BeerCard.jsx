import React from "react";

export const BeerCard = () => {
  return (
    <>
      {data.map((el, idx) => (
        <div key={idx} className={styles.container}>
          <div className={styles.title}>{el.title}</div>
        </div>
      ))}
    </>
  );
};
