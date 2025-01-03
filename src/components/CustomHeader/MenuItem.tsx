import React, { useState } from "react";
import { NavbarLinksListItem, Link, Button } from "@faststore/ui";

import styles from "./CustomHeader.module.scss";

import { CloseIcon, MenuArrow,ArrowIcon, ArrowRightPath } from "../../assets/Icons";

export type MenuProps = {
  menu: any;
};

const MenuItem = ({ item, level, onClick }: any) => {
  
  const hasChildren = (item.submenu && item.submenu.length > 0) || ( item.submenuThirdLevel && item.submenuThirdLevel.length > 0);

  return (
    <NavbarLinksListItem
      className={`${styles.subMenu__item} ${item.headTitle ? 'subMenu__item__headTitle' : ''} ${hasChildren ? "has-children" : ""} `}
      data-level={level}
      data-headtitle={item.headTitle}
    >
      <Link
        data-fs-button-dropdown-link-highlight={item.headTitle}
        href={item.href}
        data-testid="data-fs-button-dropdown-link"
        className={styles.navLink}
        onClick={onClick}
        variant={hasChildren ? "display" : "default"}
      >
        {item.title} 

        {level <= 2 ? <ArrowRightPath /> : ``}
        
      </Link>

      {hasChildren && (
        <ul
          className={styles.subMenu}
          data-level={level}
        >

          {item.submenu && item.submenu.length ? (
            item.submenu.map((subItem: any, index: any) => (
              <MenuItem
                item={subItem}
                key={index}
                level={level + 1}
              />
            ))
          ) : (
            item.submenuThirdLevel.map((subItemCol: any, index: any) => (
              <div
                className={styles.subMenu__col}
                key={index}
              >
                {subItemCol.map((subItem: any, index: any) => (
                  <MenuItem
                    item={subItem}
                    key={index}
                    level={level + 1}
                  />
                ))}
              </div>
            ))
          )}
        </ul>
      )}
    </NavbarLinksListItem>
  );
};

export default MenuItem;
