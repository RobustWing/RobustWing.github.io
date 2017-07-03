define(function (require) {
    var routes = [];
    var Home = require('pages/Home/Home');
    var Content = require('pages/Content/Content');
    var Foods = require('pages/Foods/Foods');

    routes.push({
        path: '/',
        redirect: '/home'
    });

    routes.push({
        path: '/home',
        component: Home
    },{
        path: '/content',
        component: Content
    },{
        path: '/foods',
        component: Foods
    });

    return routes;
});