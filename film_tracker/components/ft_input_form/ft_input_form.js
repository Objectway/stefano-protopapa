
myApp
.component('ftInputForm', {
    controller: function($scope, ftServiceList, ftSearchFilm){
        var ctrl = this;

        ctrl.votoRadio =[{val: 1,check: false},{val: 2,check: false},{val: 3,check: false},{val: 4,check: false},{val: 5,check: false},{val: 6,check: false},{val: 7,check: false},{val: 8,check: false},{val: 9,check: false},{val: 10,check: false}]
    
        ctrl.votoFilm = 0;

        ctrl.searchResult = []

        ctrl.imdbID = ""

        ctrl.selectedItem = [];

        ctrl.filmSalva = function(){
            let expence = {
                id: ctrl.selectedItem.imdbID,
                title: ctrl.selectedItem.Title,
                visto: ctrl.filmVisto,
                vote: ctrl.votoFilm
            }
            if(!expence.visto){expence.vote = null}
            ftServiceList.addItem(expence);
        }

        ctrl.searchFilm = function(){
            ftSearchFilm.searchForTitle(ctrl.filmTitle)
                .then(results => {
                    ctrl.searchResult = results
                    console.log(results);
                })
                .catch(error => {
                    console.log(error)
                })
        }

    },
    templateUrl: '/components/ft_input_form/ft_input_form.html'
})