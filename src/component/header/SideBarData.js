import * as RiIcons from "react-icons/ri";

const SidebarData = [
    {
        title: "О нас",
        path: "/О нас"
    },
    {
        title: "Услуги",
        path: "/Услуги",
        icon: <RiIcons.RiArrowDropDownFill />,
        subMenu: [
            {
                title: "Услуги1",
                path: "/Услуги/Услуги1"
            },
            {
                title: "Услуги2",
                path: "/Услуги/Услуги2"
            }
        ]
    },
    {
        title: "Вакансии",
        path: "/Вакансии"
    },
    {
        title: "Новости",
        path: "/Новости"
    },
    {
        title: "Соглашения",
        path: "/Соглашения",
        icon: <RiIcons.RiArrowDropDownFill />,
        subMenu: [
            {
                title: "Соглашения1",
                path: "/Соглашения/Соглашения1"
            },
            {
                title: "Соглашения2",
                path: "/Соглашения/Соглашения2"
            }
        ]
    },


]

export default SidebarData;