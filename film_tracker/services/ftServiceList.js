myApp
    .factory("ftServiceList", [function(){
        let lista = [
            {
                id: "1",
                title: "The Diparted",
                visto: true,
                vote: '9'
            },
            {
                id: "2",
                title: "The goodfellas",
                visto: true,
                vote: '6'
            },
            {
                id: "3",
                title: "Pirati deicaraibi: ai confini del mondo",
                visto: false,
                vote: null
            },
        ]

        return {
            getListIds: function(){
                let arrIds = lista.map(elemento => elemento.id);
                return arrIds
            },
            getItemById: function(id){
                let element = lista.filter(item => item.id === id)
                return element.length ? element[0] : false 
            },
            addItem: function(item){
                lista.splice(0, 0, item);
                console.log(lista);
            },
            removeItemById: function(id){
                let indexToRemove = lista.map(elemento => elemento.id).indexOf(id);
                if(indexToRemove !== -1){ lista.splice(indexToRemove, 1); }
            },
            getItemById: function(id) {
                let itemFind = lista.filter(function(item) {
                    return item.id === id;
                });
                return itemFind.length ? itemFind[0] : false;
            },
            /*getItem: function(index){
                return lista[index];
            },
            listItemDelete: function(index){
                lista.splice(index, 1);
            },
            removeItemFromList: function(index){
                lista.splice(index, 1);
            },
            getTotal: function(){
                let tot = 0
                lista.forEach(element => {
                    if(element.isPositive){
                        tot += parseFloat(element.amount);
                    }else{
                        tot -= parseFloat(element.amount);
                    }
                });
                return tot
            }*/
        }
    }])