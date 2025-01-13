import React from "react";
import styles from "./MainHeader.module.scss";

export default function TopBarItem(props: any)  {

  const topbar = props.topbar

  return (
        <div className={styles.topBar__wrapper}>
          {topbar?.length > 0 && (
            <ul className={styles.topBar__list}>
              {topbar.map((item:any, index:any) => (
                <li key={index} className={styles.topBar__list__item}>
                  <a href={item.link}  className={styles.topBar__list__item__link}>

                    {item.ico ? <img src={item.ico} width={25} height={25} /> : ``}
                    
                    {item.infoText?.map((infoText:any, index:any) => (
                      <span key={index} data-variant={infoText.color} className={`topBar__list__item__link--${infoText.color}`}>
                        {infoText.text}
                      </span>
                    ))}
                  </a>
                </li>
              ))}
            </ul>
          )}
      </div>
  );
}
