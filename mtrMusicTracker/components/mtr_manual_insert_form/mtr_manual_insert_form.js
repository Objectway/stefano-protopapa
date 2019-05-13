
myApp
    .component('mtrManualInsertForm', {
        controller: function($scope, mtrManualListService){
            var ctrl = this;
            ctrl.albumVote = 0
            ctrl.albumSalva = function(){
                let newAlbum = {
                    id: null,
                    artist: ctrl.albumArtist,
                    name: ctrl.albumName,
                    track: ctrl.albumTrack,
                    amount: ctrl.albumAmount,
                    vote: ctrl.albumVote
                }
                mtrManualListService.addAlbum(newAlbum)
                ctrl.albumArtist = ""
                ctrl.albumName = ""
                ctrl.albumTrack = ""
                ctrl.albumAmount = ""
                ctrl.albumVote = 0
            }
        },
        templateUrl: '/components/mtr_manual_insert_form/mtr_manual_insert_form.html'
    })