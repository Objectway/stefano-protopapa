let myApp = angular.module('filmTracker', ['ui.router'])

myApp.config(function($stateProvider) {
    var routes = [
        {
            name: 'new',
            url: '/new',
            component: 'ftInputForm'
        },
        {
            name: 'list',
            url: '/list',
            component: 'ftList'
        }
        ,
        {
            name: 'detail',
            url: '/list/{itemId}',
            component: 'mtListItemId',
            /*resolve: {
                itemDataFromRoute: function(mtServiceList, $transition$) {
                    return mtServiceList.getItemById($transition$.params().itemId)
                },
                showDelete: function() {
                    return false;
                }
                // itemId: function($transition$) {
                //     return $transition$.params().itemId
                // }
            }*/
        }
    ]

    routes.forEach(r => {
        $stateProvider.state(r);
    })

});