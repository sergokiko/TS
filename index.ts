
// Клас людина:
//     поля:
//         вага,зріст
// Клас депутат(наслідується від людини):
// поля:
//     прізвище,ім'я,вік,хабарник?,розмі хабаря
// методи:
//     дати хабаря(зробити відповідні перевірки...
// якщо депутат не хабарник то щоб він відмовився,
//     або ж якщо сума хабаря надто велика то щоб він вагався
// чи брати чи ні)
// Клас фракція
// поля:
//     список депутатів
// методи:
//     додати депутата (вводимо з клави)
// видалити депутата(теж з клави)
// видалити всіх негідників які брали хабаря
// вивести найбільшого хабарника
// вивести всіх депутатів
// видалити всіх депутатів
// вивести загальну суму хабарів для фракції
// клас Верховна рада
// поля:
//     мапа фракцій
// методи:
//     додати\видалити фракцію
// вивести всі фракції
// вивести конкретну фракцію
// додати\видалити депутата з фракції
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції


class Human {
    weight:number
    height:number
    constructor(weight:number, height:number) {
        this.height = height
            this.weight = weight
    }
}
class Deputat extends Human {
    id:number
    surname:string
    name:string
    age:number
    isHabarnuk: boolean
    valueOfHabar:number
    constructor(id: number, weight:number, height:number,surname:string,name:string,age:number,isHabarnuk: boolean,valueOfHabar:number) {
        super(weight, height);
        this.weight = weight
        this.height = height
        this.surname = surname
        this.name = name
        this.age = age
        this.isHabarnuk =  isHabarnuk
        this.valueOfHabar = valueOfHabar
    }
    giveHabar(value:number):void{
        if(this.isHabarnuk){
            if (value > 10000){
                console.log('дипутат вагається')
            }else {
            this.valueOfHabar += value
            }
        }else {
            console.log('дипутат не бере взятки')
        }
    }

}

class   Fracia {
    deputats: Array<Deputat>

    constructor(deputats:Array<Deputat>) {
        this.deputats = deputats
    }
    addDeputat(deputat:Deputat):void{
        this.deputats.push(deputat)
    }
    deleteDeputat(id):void{
        this.deputats.filter(deputat => deputat.id != id)
    }
    deleteHabarnukiv():void{
        this.deputats = this.deputats.filter(el => el.isHabarnuk)
    }
    mostHabarnuk():void{
         let defaultElem:Deputat = this.deputats[0];
        for (const deputat of this.deputats) {
            if(deputat.valueOfHabar >defaultElem.valueOfHabar){
                defaultElem = deputat
            }
        }
        console.log(defaultElem);
    }
    showParticipants():void{
        console.log(this.deputats)
    }
    deleteAllDeputats():void{
        this.deputats = []
    }
    sumOfHabariv():void{
        console.log(this.deputats.reduce((acc, el) => (acc + el.valueOfHabar), 0));
    }
}
class VerhovnaRada{
    fractions : Array<Fracia>
    constructor(fractions : Array<Fracia>) {
        this.fractions = fractions
    }
    addFraction(fraction:Fracia):void{
        this.fractions.push(fraction)
    }
    deleteFraction(i:number){
        this.fractions.splice(i,1)
    }
    showFractions(){
        console.log(this.fractions);
    }
    logFraction(i){
        console.log(this.fractions[i]);
    }
    showAllHabarnuki(){
    this.fractions.forEach(frac => frac.deputats.forEach(deputat =>{
            if(deputat.isHabarnuk){
                console.log(deputat);
            }
        }
        )
    )}
    mostHabarnuk():void{
        let maxHabarnukValue = this.fractions[0].deputats[0].valueOfHabar

        this.fractions.forEach(frac => frac.deputats.forEach(deputat =>{
                if(deputat.valueOfHabar > maxHabarnukValue){
                    maxHabarnukValue = deputat.valueOfHabar
                }
            }
            )
        )
        console.log(maxHabarnukValue);
    }
    mostHabarnukOfEachFraction():void{


        this.fractions.forEach((frac, i) =>{
            let maxHabarnukValue = this.fractions[i].deputats[0].valueOfHabar
            frac.deputats.forEach(deputat =>{
                if(deputat.valueOfHabar > maxHabarnukValue){
                    maxHabarnukValue = deputat.valueOfHabar
                }
            })
                console.log(maxHabarnukValue);
        })
    }

    showAllDeputats(){
        this.fractions.forEach(frac => frac.deputats.forEach(deputat => console.log(deputat)))
    }
    deleteDeputat(id){
        this.fractions.forEach(frac => frac.deputats.filter(dep => dep.id != id))
    }

}
