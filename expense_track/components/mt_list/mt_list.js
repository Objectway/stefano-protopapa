myApp
    .component('mtList', {
        bindings: {
            title: '@', // '=' -> lega il binding a una variabile
        },
        controller: function($scope, $rootScope){

            var ctrl = this;

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

            /*this.$onInit = function(){
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