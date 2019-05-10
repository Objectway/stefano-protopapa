myApp
    .factory("ftSearchFilm", ['$http','$q', function($http, $q){

        const key = "51fb3d47";

        let endPoint = "http://www.omdbapi.com/?apikey=" + key
        
        return {
            searchForTitle: function(searchStr){
                
                let searchPoint = endPoint + "&s=" + searchStr;


                /*fetch(searchPoint)
                    .then(response => response.json())
                    .then(responseJson => {
                        console.log(responseJson)
                    })
                    .catch(res => {
                        console.log("error")
                    })*/


                //return ( $http({
                //    method: 'GET',
                //    url: searchPoint
                //})).then(function (responseJson) {
                //    console.log(responseJson)
                //}).catch(function (error) {
                //    console.log("error")
                //})

                let rit = $q.defer()
                $http({
                    method: 'GET',
                    url: searchPoint
                }).then(function (responseJson) {
                    if(responseJson.data.Response === "True")
                    {
                        rit.resolve(responseJson.data.Search)
                    } else{
                        rit.reject(responseJson.data.Error)
                    }
                }).catch(function (error) {
                    rit.reject(error)
                })
                return rit.promise
            }
        }
    }])