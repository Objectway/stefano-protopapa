
myApp
.component('mtrArtistInformation', {
    bindings: {
        itemId: '='
    },
    controller: function(mtrSearchService){
        
        var ctrl = this;
        ctrl.$onInit = function(){
            mtrSearchService.getArtistInformation(ctrl.itemId)
                .then(results => {
                    ctrl.searchResult = results
                    ctrl.artistName = ctrl.searchResult.artistName
                    ctrl.primaryGenreName = ctrl.searchResult.primaryGenreName
                })
                .catch(error => {
                    console.log(error)
                })
        }

    }, 
    templateUrl: '/components/mtr_artist_information/mtr_artist_information.html'
})