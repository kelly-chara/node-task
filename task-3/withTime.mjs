import { MyEventEmitter } from "./eventEmitter.mjs";

export class WithTime extends MyEventEmitter {
    execute(asyncFunc, ...args) {
        // Emit 'begin' event
        this.emit('begin');
        const startTime = Date.now();

    
        // Execute the asynchronous function
       asyncFunc(...args).then(result => {
          // Emit 'data' event with the result data
          
          const data = result
          this.emit('data', result);
    
          const finishTime = Date.now();

          const elapsedTime = `${finishTime - startTime} miliseconds`;
          // Emit 'end' event
          this.emit('end', elapsedTime);
        });
      }
}