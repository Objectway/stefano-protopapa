//myApp = angular.module('moneyTracker', [])

myApp
    .component('mtListItem', {
        bindings: {
            itemData: '=',
            itemIndex: '='
        },
        controller: function($scope){
            this.deleteItem = function(){
                console.log(this.itemData, this.itemIndex)
                $scope.$emit('listItemDelete', this.itemIndex)
            }
        },

        templateUrl: '/components/mt_list_item/mt_list_item.html',
    })