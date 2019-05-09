let myApp = angular.module('moneyTracker', ['ui.router'])

myApp.config(function($stateProvider) {
    var routes = [
        {
            name: 'new',
            url: '/new',
            component: 'mtListTransaction'
        },
        {
            name: 'list',
            url: '/list',
            component: 'mtList'
        }
    ]

    routes.forEach(r => {
        $stateProvider.state(r);
    })

});