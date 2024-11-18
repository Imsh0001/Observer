class Subject {
    constructor() {
        this.observers = [];
    }


    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }


    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}


class Observer {
    constructor(name) {
        this.name = name;
    }


    update(data) {
        console.log(`${this.name} modtog data: ${data}`);
    }
}


const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("Ny besked til observatører, her er en opdatering");
subject.notifyObservers("Vi har lavet en ændring i systemet")


subject.removeObserver(observer1);

subject.notifyObservers("Det kun observer 2 der vil modtage denne besked");
