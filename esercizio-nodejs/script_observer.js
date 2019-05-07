// create an Observable class
class Observable {
    constructor() {
      this.observers = []; // and array to hold all observers
    }
    
    // adding new observers
    register(observer) {
      this.observers.push(observer);
    }
    
    // removing an observer
    unregister(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
    
    // emitting to an observer
    notify(message) {
      this.observers.forEach((observer) => {
        observer(message);
      });
    }
  }
  
  // new observale instance
  const observable =  new Observable();
  
  function observer1(message){
    console.log(`First observer ${message}`);
  }
  
  function observer2(message){
    console.log(`Second observer ${message}`);
  }
  
  observable.register(observer1) 
  observable.register(observer2)
  
  observable.notify('Hello Devs');
  // First observer Hello Devs
  // Second observer Hello Devs
  
  observable.unregister(observer2); // after unregistering observer2 and we notify next, observer2 will not be triggered
  
  observable.notify('Observing the observer');
  // First observer Observing the observer