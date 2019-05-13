let myApp = angular.module('musicTracker', ['ui.router'])

myApp.config(function($stateProvider) {
    var routes = [{
            name: 'home',
            url: '',
            component: 'mtrSearchInsertForm'
        },
        {
            name: 'new',
            url: '/new',
            component: 'mtrSearchInsertForm'
        },
        {
            name: 'list',
            url: '/list',
            component: 'mtrManualList'
        },
    ]

    routes.forEach(r => {
        $stateProvider.state(r);
    })

});