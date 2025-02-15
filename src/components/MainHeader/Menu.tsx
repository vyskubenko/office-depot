import React, { useState } from "react";
import {
  NavbarLinks,
  NavbarLinksList
} from "@faststore/ui";
import { FC } from "react";

import styles from "./MainHeader.module.scss";

import MenuItem from "./MenuItem";


export type MenuProps = {
  menu: any;
};

const Menu: FC<MenuProps> = ({ menu: mainMenu  }) => {

  if(!mainMenu) return

  return (
    <NavbarLinks className={styles.mainHeader__navLinks}>
      <NavbarLinksList className={styles.mainHeader__menu}>
        {mainMenu.length && mainMenu.map((item: any, idx: React.Key | null | undefined) => (
          <MenuItem
            key={idx}
            item={item}
            level={1}
          />
        ))}
      </NavbarLinksList>
    </NavbarLinks>
  );
};

export default Menu;
