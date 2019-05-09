myApp
    .factory("mtServiceList", [function(){
        let lista = [
            {
                id: "asdfghjklm",
                date: {
                    day: 11,
                    month: 'MAR', 
                    year: 2019
                },
                amount: 10,
                description: 'pranzo',
                isPositive: true
            },
            {
                id: "asdfghjklx",
                date: {
                    day: 10,
                    month: 'APR', 
                    year: 2019
                },
                amount: 20,
                description: 'caffe',
                isPositive: true
            },
            {
                id: "asdfghjklj",
                date: {
                    day: 12,
                    month: 'MAG', 
                    year: 2019
                },
                amount: 20,
                description: 'caffe',
                isPositive: false
            }
        ]

        return {
            getList: function(){
                return lista
            },
            getListIds: function(){
                let arrIds = lista.map(elemento => elemento.id);
                return arrIds
            },
            getItem: function(index){
                return lista[index];
            },
            getItemById: function(id){
                let element = lista.filter(item => item.id === id)
                return element.length ? element[0] : false 
            },
            removeItemById: function(id){
                let indexToRemove = lista.map(elemento => elemento.id).indexOf(id);
                if(indexToRemove !== -1){ lista.splice(indexToRemove, 1); }
            },
            addItem: function(item){
                lista.push(item);
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
            }
        }
    }])