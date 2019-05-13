
myApp
    .component('mtrManualList', {
        bindings: {
            title: '@', // '=' -> lega il binding a una variabile
        },
        controller: function(mtrManualListService){
            
            var ctrl = this;
            
            ctrl.$onInit = function(){
                ctrl.listaIds = mtrManualListService.getListIds()
            }
            ctrl.$doCheck = function(){
                ctrl.listaIds = mtrManualListService.getListIds()
            }
        }, 
        templateUrl: '/components/mtr_manual_list/mtr_manual_list.html'
    })