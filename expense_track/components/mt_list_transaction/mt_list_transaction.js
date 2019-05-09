
myApp
    .component('mtListTransaction', {
        controller: function($scope, $rootScope, mtServiceList){
            var ctrl = this;
            
            ctrl.isPositive = true;
           
            ctrl.addItem = function(){
                let expence = {
                    id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10),
                    date: {
                        day: 10,
                        month: 'APR', 
                        year: 2019
                    },
                    amount: $scope.itemAmount,
                    description: $scope.itemDesc,
                    isPositive: ctrl.isPositive
                }
                mtServiceList.addItem(expence);
            }
            /*ctrl.addItem = function(){
                $rootScope.$broadcast('listItemAdd', $scope.itemAmount, $scope.itemDesc)
            }

            $scope.$on('resetInput', function(){
                console.log("eccolo")
                $scope.itemAmount = ""
                $scope.itemDesc = ""
            })

            ctrl.checkAmount = function(){
                let amount = parseFloat($scope.itemAmount)
                if(isNaN(amount)){
                    alert("non è un numero =>" + amount)
                }else{
                    if(amount > 0){
                        alert("positivo =>" + amount)
                    }else{
                        alert("negativo =>" + amount)
                    }
                }
            }*/
        },
        templateUrl: '/components/mt_list_transaction/mt_list_transaction.html'
    })