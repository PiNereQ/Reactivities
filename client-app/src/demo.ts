interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void;
}



const duck1: Duck = {
    name: 'kwakwa1',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}
const duck2: Duck = {
    name: 'kwakwa1',
    numLegs: 2,
    makeSound: (sound: string) => console.log(sound)
}

duck1.makeSound('custom quack');
duck1.makeSound('custom quack by scnd duck');


export const duck = [duck1]