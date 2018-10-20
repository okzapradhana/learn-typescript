class Human{
    name: string = "Okza";
    age: number;
    static address: string; //static property

    constructor(name: string, age: number){
        this.name = name
        this.age = age
        console.log("Hello " + this.name + " " + this.age + ". You're in constructor now!")
    }

    sayHello(name: string){
        console.log("Hi " + name)
    }

}

let human = new Human("Rilakumma", 20)
human.sayHello("Okza")
console.log(human.name)
Human.address = "Malang"
console.log(Human.address)
