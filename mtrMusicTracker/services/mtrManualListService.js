myApp
    .factory("mtrManualListService", [function(){
        let list = [
            {
                id: "580708175",
                artistId: "994656",
                artistName: "Led Zeppelin",
                collectionName: "Led Zeppelin IV (Remastered)",
                trackCount: 8,
                collectionPrice: 9.99,
                vote: 5
            },
            {
                id: 785232473,
                artistId: "165907",
                artistName: "Black Sabbath",
                collectionName: "Paranoid",
                collectionPrice: 9.99,
                trackCount: 8,
                vote: 4
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