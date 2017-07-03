define(function (require) {
    var routes = [];
    var Home = require('pages/Home/Home');
    var Content = require('pages/Content/Content');

    routes.push({
        path: '/',
        redirect: '/home'
    });

    routes.push({
        path: '/home',
        component: Home
    });
    routes.push({
        path: '/content',
        component: Content
    });

    return routes;
});