export const email_contact= "education@email.com";
export const phone= "+987 558 547 589";
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
                "href": "/course-details",
                "name": "course details"
            },
            {
                "href": "/event",
                "name": "event page"
            },
            {
                "href": "/event-details",
                "name": "event details"
            },
            {
                "href": "/login-register",
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
                "href": "/blog/detail",
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