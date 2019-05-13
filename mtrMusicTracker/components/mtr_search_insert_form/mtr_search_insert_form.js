
myApp
.component('mtrSearchInsertForm', {
    controller: function(mtrSearchService, mtrManualListService){
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

        ctrl.saveAlbum = function(){
            let newAlbum = {
                id: ctrl.selectedItem.collectionId,
                artistId: ctrl.selectedItem.artistId,
                artistName: ctrl.selectedItem.artistName,
                collectionName: ctrl.selectedItem.collectionName,
                trackCount: ctrl.selectedItem.trackCount,
                collectionPrice: ctrl.selectedItem.collectionPrice,
                vote: ctrl.albumVote
            }
            mtrManualListService.addAlbum(newAlbum)
        }

    },
    templateUrl: '/components/mtr_search_insert_form/mtr_search_insert_form.html'
})