// constantes
export const email_contact= "education@email.com";
export const phone= "+987 558 547 589";
export const about_caption = [
    "Ugiat nulla pariatur. Edeserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natu."
];
export const user_contact = "Uttara, Dhaka, Bangladesh";
export const header_img= "../assets/img/icon-img/header-shape.png";
// rutas de la barra de navegación
export const paths= [
    {
        "href": "/home",
        "name": "HOME",
        "submenu": false
    },
    {
        "href": "/about",
        "name": "ABOUT",
        "submenu": false
    },
    {
        "href": "#",
        "name": "PAGES",
        "submenu": true,
        "paths": [
            {
                "href": "/course",
                "name": "course page"
            },
            {
                "href": "/course/detail/1",
                "name": "course details"
            },
            {
                "href": "/event",
                "name": "event page"
            },
            {
                "href": "/event/detail/1",
                "name": "event details"
            },
            {
                "href": "/login",
                "name": "login / register"
            }
        ]
    },
    {
        "href": "/course",
        "name": "COURSES / PROGRAMMES",
        "submenu": false
    },
    {
        "href": "/blog",
        "name": "BLOG",
        "submenu": true,
        "paths": [
            {
                "href": "/blog",
                "name": "blog"
            },
            {
                "href": "/blog/detail/1",
                "name": "blog details"
            },
        ]
    },
    {
        "href": "/contact",
        "name": "CONTACT",
        "submenu": false
    }
];