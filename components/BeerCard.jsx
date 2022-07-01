import React from "react";

export const BeerCard = () => {
  return (
    <>
      {data.map((el) => (
        <div className={styles.container}>
            <div className={styles.title}>
                {el.title}
            </div>
        </div>
      ))}
    </>
  );
};
