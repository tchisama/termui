



function wrapper(){
}


type WindowProps = {
  content?:{
      [key:string]:WindowProps
  }
  widthPersent?:number
}



function Window ({
  content
}:WindowProps) :string {
  

  return "hello world"

}


const chat = {
    widthPersent: 50
}


console.log(
  Window(
    {
      content:{
          chat
      }
    }
  )
)
