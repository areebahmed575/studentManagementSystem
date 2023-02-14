class courses{
    name:string
    cost:number
    constructor(name:string,cost:number){
        this.name=name
        this.cost=cost

    }
}
class student{
    static idCounter=0
    stdId:string
    name:string
    course:string[]=[]
    balance:number
    constructor(name:string,course:[]=[]){ 
        this.name=name
        this.stdId=student.generateId()
        this.course=course
        this.balance=0
    }
    static generateId(){
        this.idCounter++
        return `${this.idCounter}`.padStart(5, '0');
    }
    enroll(Course:courses){
        this.course.push(Course.name)
        this.balance+=Course.cost

    }
    viewBalance():number{
        return this.balance
    }
    payTution(amount:number){
        this.balance -=amount


    }
    showStatus():string{
        return " id: "+this.stdId+"\n name: "+this.name+"\n courses: "+this.course+"\n balance: "+this.balance+"\n "
    }

}

const AI=new courses("Ai",500)
const IOT=new courses("Iot",500)
const BBc=new courses("bbc",500)

const std1=new student("areeb",[])
const std2=new student("ali",[])
//const std3=new student("arsal",[])

std1.enroll(AI)
std1.enroll(IOT)

std2.enroll(AI)
std2.enroll(IOT)
std2.enroll(BBc)

std1.payTution(500)
std2.payTution(500)
std1.payTution(500)

console.log(std1.showStatus())
console.log(std2.showStatus())
