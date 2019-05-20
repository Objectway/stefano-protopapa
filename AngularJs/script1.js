let myFirstPromise = new Promise((resolve, reject) => {
    console.log("init promise");

    setTimeout(function(){
        resolve("success!");
    }, 250);
});

myFirstPromise.then((successMessage) => {
    console.log("yay! " + successMessage);
}).catch((e) => {
    console.log("Error! " + e);
});