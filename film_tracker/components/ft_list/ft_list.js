myApp
    .component('ftList', {
        bindings: {
            title: '@', // '=' -> lega il binding a una variabile
        },
        controller: function(ftServiceList){
            
            var ctrl = this;
            
            ctrl.$onInit = function(){
                ctrl.listaIds = ftServiceList.getListIds()
            }
            ctrl.$doCheck = function(){
                ctrl.listaIds = ftServiceList.getListIds()
            }
        },
        templateUrl: '/components/ft_list/ft_list.html'
    })