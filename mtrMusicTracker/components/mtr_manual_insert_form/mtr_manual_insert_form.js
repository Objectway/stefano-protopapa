
myApp
    .component('mtrManualInsertForm', {
        controller: function($scope){
            var ctrl = this;
            ctrl.albumVote = 0
            ctrl.albumSalva = function(){
                let newAlbum = {
                    artist: ctrl.albumArtist,
                    name: ctrl.albumName,
                    track: ctrl.albumTrack,
                    amount: ctrl.albumAmount,
                    vote: ctrl.albumVote
                }
                //if(!expence.visto){expence.vote = null}
                //ftServiceList.addItem(expence);
                console.log(newAlbum)
                ctrl.albumArtist = ""
                ctrl.albumName = ""
                ctrl.albumTrack = ""
                ctrl.albumAmount = ""
                ctrl.albumVote = 0
            }
        },
        templateUrl: '/components/mtr_manual_insert_form/mtr_manual_insert_form.html'
    })