//myApp = angular.module('moneyTracker', [])

myApp
    .component('mtListItemId', {
        bindings: {
            idItem: '='
        },
        controller: function($scope, mtServiceList){
            let ctrl = this
            ctrl.$onInit = function(){
                ctrl.itemData = mtServiceList.getItemById(ctrl.idItem)
            }
            ctrl.deleteItem = function(){
                mtServiceList.removeItemById(ctrl.idItem);
            }
        },

        templateUrl: '/components/mt_list_item_id/mt_list_item_id.html',
    })