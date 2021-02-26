import * as React from 'react';
import "./SideBar.scss";

const SubMenu = ({item}) => {
    const [subnav,setSubnuv]= React.useState(false)
    const showSubnuv = () => setSubnuv(!subnav)
    console.log(subnav)
    return (
        <>
            <div to={item.path} onClick={item.subMenu && showSubnuv}>
                <li>
                    {item.title}
                    {item.icon}
                </li>
            </div>
            <div className="subMenu">
                {subnav && item.subMenu.map((item, index) => {
                    return (
                        <div className="subMenu" to={item.path} key={index}>
                            <li className="subMenu-list">
                                {item.title}
                            </li>
                        </div>
                    )
                    }
                )}
            </div>
        </>
    );
};

export default SubMenu;