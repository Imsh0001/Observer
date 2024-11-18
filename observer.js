
class Newspaper {
    constructor() {
        this.subscribers = [];
    }


    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }


    unsubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }


    publish(issue) {
        console.log(`Ny udgave udgivet: ${issue}`);
        this.subscribers.forEach(subscriber => subscriber.notify(issue));
    }
}

class Subscriber {
    constructor(name) {
        this.name = name;
    }


    notify(issue) {
        console.log(`${this.name} blev notificeret om: ${issue}`);
    }
}


const newspaper = new Newspaper();

const Emil = new Subscriber("Emil");
const Marie = new Subscriber("Marie");


newspaper.subscribe(Emil);
newspaper.subscribe(Marie);


newspaper.publish("Udgave #1");


newspaper.unsubscribe(Emil);


newspaper.publish("Udgave #2");
