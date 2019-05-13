myApp
    .component('mtrListItem', {
        bindings: {
            idItem: '=',
            itemIndex: '=' 
        },
        controller: function(mtrManualListService){
            let ctrl = this
            ctrl.$onInit = function(){
                ctrl.itemData = mtrManualListService.getItemById(ctrl.idItem)
            }
        },

        templateUrl: '/components/mtr_list_item/mtr_list_item.html',
    })