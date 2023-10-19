
class Books {
    constructor(bookname , writer , releasedate , price){
        this.bookname = bookname
        this.writer = writer
        this.releasedate = releasedate
        this.price = price
    }
    GetPrice(discount){
        this.discount = discount
        const discountprice = (this.price*(1-discount/100))  
    }
}
const myClass = new Books("Sefiller" , "Elxan Elatli" , "01.01.2020" , 60)
myClass.GetPrice(25)
console.log(myClass);