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
        {
            name: 'detail',
            url: '/list/{artistId}',
            component: 'mtrArtistInformation',
            resolve: {
                itemId: function($transition$) {
                    return $transition$.params().artistId
                }
            }
        }
    ]

    routes.forEach(r => {
        $stateProvider.state(r);
    })

});