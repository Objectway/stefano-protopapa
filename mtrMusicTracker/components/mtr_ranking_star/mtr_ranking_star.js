
myApp
.component('mtrRankingStar', {
    bindings: {
        vote: '='
    },
    controller: function($scope){
        
        var ctrl = this;
        
        ctrl.star = "";

        ctrl.$onInit = function(){
            let number = parseInt(ctrl.vote)
            for(let i = 0; i<number; i++)
            {
                ctrl.star += "✰ ";
            }
        }
    }, 
    templateUrl: '/components/mtr_ranking_star/mtr_ranking_star.html'
})