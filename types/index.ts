export type catagoryCardType ={
    category: String,
      items:String []
}
export  type catagoryDataType ={
  category:String ,
  items:{label:String , img:String}[]
}
export type productDataType ={
  _id ?:String ,
  
  name :String ,
  category:String ,
  description :String ,
  price:Number ,
  availability:Number ,
  dimensions:any[],
  other :any[],
  img :String[]
} 