import * as React from 'react';
import SidebarData from "./SideBarData";
import "./SideBar.scss"
import SideMenu from "./SubMenu";

const SideBar = () => {
    return (
      <>
          <nav className="Menu">
              {SidebarData.map((item, index) => {
                      return <SideMenu item ={item} key={index}/>
                  }
              )}
          </nav>
      </>
    );
};

export default SideBar;