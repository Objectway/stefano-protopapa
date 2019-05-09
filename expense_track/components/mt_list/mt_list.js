myApp
    .component('mtList', {
        bindings: {
            title: '@', // '=' -> lega il binding a una variabile
        },
        controller: function($scope, $rootScope, mtServiceList){
            
            var ctrl = this;
            
            ctrl.lista = mtServiceList.getList()
            ctrl.listIds = Object.keys(ctrl.lista)
            ctrl.$onInit = function(){
                ctrl.lista = mtServiceList.getList()
                ctrl.listaIds = mtServiceList.getListIds()
                ctrl.total = mtServiceList.getTotal()
            }

            ctrl.$doCheck = function(){

                ctrl.listaIds = mtServiceList.getListIds()
                ctrl.total = mtServiceList.getTotal()
            }
            /*
            
            ctrl.lista = [
                {
                    date: {
                        day: 11,
                        month: 'MAR', 
                        year: 2019
                    },
                    amount: 10,
                    description: 'pranzo'
                },
                {
                    date: {
                        day: 10,
                        month: 'APR', 
                        year: 2019
                    },
                    amount: 20,
                    description: 'caffe'
                },
                {
                    date: {
                        day: 12,
                        month: 'MAG', 
                        year: 2019
                    },
                    amount: 20,
                    description: 'caffe'
                }
            ]

            $scope.$on('listItemDelete', function(event, index){
                console.log("elimino " + index);
                ctrl.lista.splice(index, 1);
            })

            
            $scope.$on('listItemAdd', function(event, amount, desc){
                let item = {
                    date: {
                        day: 10,
                        month: 'APR', 
                        year: 2019
                    },
                    amount: amount,
                    description: desc
                }
                
                ctrl.lista.splice(0, 0, item);
                $rootScope.$broadcast('resetInput')
            
            })

            this.$onInit = function(){
                console.log("on init")
            }
            this.$onChanges = function(cambio){
                console.log('onChanges', cambio)
            }
            this.faiCose = function(){
                this.title = 'faccio cose'
            }*/
        },
        controllerAs: 'mtListCtrl', //rinomina il $ctrl
        templateUrl: '/components/mt_list/mt_list.html'
    })