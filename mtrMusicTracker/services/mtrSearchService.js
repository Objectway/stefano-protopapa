myApp
    .factory("mtrSearchService", ['$http','$q', function($http, $q){

        let endPoint = "https://itunes.apple.com/search?entity=album&term="

        let endPointDetails = "https://itunes.apple.com/lookup?id="
        
        return {
            searchForTitle: function(searchStr){
                
                let searchPoint = endPoint + searchStr;

                let rit = $q.defer()
                $http({
                    method: 'GET',
                    url: searchPoint
                }).then(function (responseJson) {
                    if(responseJson.data.resultCount !== 0)
                    {
                        rit.resolve(responseJson.data.results)
                    }else{
                        rit.reject("Nessun risultato trovato")
                    }
                }).catch(function (error) {
                    rit.reject(error)
                })
                return rit.promise
            },

            getArtistInformation: function(searchId){
                let searchPoint = endPointDetails + searchId;

                let rit = $q.defer()
                $http({
                    method: 'GET',
                    url: searchPoint
                }).then(function (responseJson) {
                    if(responseJson.status !== 0)
                    {
                        rit.resolve(responseJson.data.results[0])
                    }else{
                        rit.reject("Nessun risultato trovato")
                    }
                }).catch(function (error) {
                    rit.reject(error)
                })
                return rit.promise
            }
        }
    }])