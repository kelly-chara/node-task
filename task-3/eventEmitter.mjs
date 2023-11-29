export class MyEventEmitter {
    listeners = {};  // key-value pair
   
    // add the listener to the listenes object
    addListener(eventName, fn) {
        this.listeners[eventName] = this.listeners[eventName] || [];
        this.listeners[eventName].push(fn);
      }
    
      on(eventName, fn) {
       this.addListener(eventName, fn)
      }
 
    removeListener(eventName, fn) {
      // if the event is in the object
      if (this.listeners[eventName]) {
      // delete the entrie       
        delete this.listeners[eventName]
      // call the function passed
       fn && fn()
      }
    }
      
    off(eventName, fn) {
      this.removeListener(eventName, fn)
    }
   
    once(eventName, fn) {
      const onceWrapper = (...args) => {
        fn(...args);  // Call the original listener function with the provided arguments
        this.off(eventName);  // Remove the onceWrapper from the listeners
      };

      // add the wrapper as a listener
      this.on(eventName, onceWrapper);
    }
   
    emit(eventName, ...args) {
      // if the event exists
      if (this.listeners[eventName]) {
        // take all the functions associated to it
        for (const listener of this.listeners[eventName]) {
          // and call it with arguments if any
          listener(...args);
        }
      }
    }
   
    listenerCount(eventName) {
      return this.listeners[eventName] ? this.listeners[eventName].length : 0;
    }
  
    rawListeners(eventName) {
      return this.listeners[eventName] || [];
    }
    
   }