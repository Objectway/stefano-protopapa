myApp
    .component('ftListItem', {
        bindings: {
            idItem: '='
        },
        controller: function($scope, ftServiceList){
            let ctrl = this
            ctrl.$onInit = function(){
                ctrl.itemData = ftServiceList.getItemById(ctrl.idItem)
            }
            ctrl.deleteItem = function(){
                ftServiceList.removeItemById(ctrl.idItem);
            }
        },

        templateUrl: '/components/ft_list_item/ft_list_item.html',
    })