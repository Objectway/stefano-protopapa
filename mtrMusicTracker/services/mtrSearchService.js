myApp
    .factory("mtrSearchService", ['$http','$q', function($http, $q){

        let endPoint = "https://itunes.apple.com/search?entity=album&term="
        
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
            }
        }
    }])