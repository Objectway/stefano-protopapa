const RxJs = require('rxjs');

function makePromise() {
    return new Promise((resolve, reject) => {
        console.log('promise executed')
        resolve();
    })
}

function makeObservable(){
    return new RxJs.Observable((observer) => {
        console.log('observable executed');
        observer.next("pippo");
        observer.complete();
    })
}

makePromise();

makeObservable();

makeObservable().subscribe((response) => {
    console.log("subsicriber 1 ", response)
});