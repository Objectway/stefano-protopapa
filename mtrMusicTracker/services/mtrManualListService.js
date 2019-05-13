myApp
    .factory("mtrManualListService", [function(){
        let list = [
            {
                id: 1,
                artistId: "",
                artistName: "Led Zeppelin",
                collectionName: "IV",
                trackCount: 12,
                collectionPrice: 17.104567,
                vote: 5
            }
        ]

        return {
            addAlbum: function(newAlbum){
                newAlbum.id = list.length + 1;
                list.splice(0, 0, newAlbum);
            },
            getListIds: function(){
                let arrIds = list.map(elemento => elemento.id);
                return arrIds
            },
            getItemById: function(id) {
                let itemFind = list.filter(function(item) {
                    return item.id === id;
                });
                return itemFind.length ? itemFind[0] : false;
            },
        }
    }])