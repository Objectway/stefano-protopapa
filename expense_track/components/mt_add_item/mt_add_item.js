myApp
    .component('mtAddItem', {
        controller: function($scope, $rootScope){
            var ctrl = this;
            ctrl.addItem = function(){
                $rootScope.$broadcast('listItemAdd', $scope.itemAmount, $scope.itemDesc)
            }

            $scope.$on('resetInput', function(){
                console.log("eccolo")
                $scope.itemAmount = ""
                $scope.itemDesc = ""
            })
        },
        templateUrl: '/components/mt_add_item/mt_add_item.html'
    })