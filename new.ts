import { tableChars } from "./chars"
import type { WindowProps } from "./types"

const width = process.stdout.columns
const height = process.stdout.rows - 4







function wrapper(){
}

function fillArea(props:DivProps):string{
  return `${tableChars.tableTopLeft}${tableChars..repeat(props.width-2)}┐\n`
}


function Window ({
  content
}:WindowProps) :string {
  if(typeof content === "string"){
    return div({
      content,
      width: width,
      height: height
    })
  }else{
    return "this is an object"
  }
}


type DivProps = {
  content: string
  width: number
  height: number
}

function div ({content,width,height}) :string{
  const filledArea = fillArea(content,width,height);
  return filledArea;
}






const chat = {
    widthPersent: 50,
    heightPersent: 100,
    content:"hello world"
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
