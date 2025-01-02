import React from "react";

import styles from "./Info.module.scss";

const Info = ({ title, image, description }) => {
 

  return (
    <div className={styles.cartEmpty}>
      <img src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button>
        <img src="img/arrow-left.svg" alt="Arrow" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
