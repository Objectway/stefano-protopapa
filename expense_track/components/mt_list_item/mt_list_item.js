//myApp = angular.module('moneyTracker', [])

myApp
    .component('mtListItem', {
        bindings: {
            itemData: '=',
            itemIndex: '='
        },
        controller: function($scope, mtServiceList){
            let ctrl = this
            /*ctrl.$onInit = function(){
                ctrl.itemData = mtServiceList.getItem(ctrl.itemIndex)
            }*/
            ctrl.deleteItem = function(){
                mtServiceList.removeItemFromList(ctrl.itemIndex);
            }
        },

        templateUrl: '/components/mt_list_item/mt_list_item.html',
    })