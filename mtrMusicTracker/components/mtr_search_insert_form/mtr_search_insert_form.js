
myApp
.component('mtrSearchInsertForm', {
    controller: function(mtrSearchService){
        var ctrl = this;

        ctrl.searchResult = []


        ctrl.selectedItem = [];

        ctrl.searchAlbum = function(){
            mtrSearchService.searchForTitle(ctrl.strSearch)
                .then(results => {
                    ctrl.searchResult = results
                    console.log(ctrl.searchResult)
                })
                .catch(error => {
                    console.log(error)
                })
        }

    },
    templateUrl: '/components/mtr_search_insert_form/mtr_search_insert_form.html'
})