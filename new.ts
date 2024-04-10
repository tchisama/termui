import type { WindowProps } from "./types"
import {chars} from "./chars"

const width = process.stdout.columns
const height = process.stdout.rows - 4



const {
  TopLeft,TopRight,BottomLeft,BottomRight,Horizontal,Vertical,MiddleLeft,MiddleRight,MiddleTop,MiddleBottom,MiddleCross
} = chars






function wrapper(){

}


type FillProps = {
  content: string
  width: number
  height: number
}

function fillArea(props:FillProps):string{
  let result =  `${TopLeft}${Horizontal.repeat(props.width-2)}${TopRight}\n`
  result += `${Vertical}${props.content.padEnd(props.width-2)}${Vertical}\n`
  for (let i = 0; i < (props.height-1); i++) {
    result += `${Vertical}${' '.repeat(props.width-2)}${Vertical}\n`
  }
  result += `${BottomLeft}${Horizontal.repeat(props.width-2)}${BottomRight}`
  return result
}


function Window ({
  text,
  content
}:WindowProps) :string {
  if(text){
    return div({content:[text],width:[width],height:[height]})
  }else if(content){
    const elements = Object.entries(content);
    let result = "";
    elements.forEach(([key,value])=>{
      result += Window(value)
    })
  }else{
    return "no content provided"
  }

}


type DivProps = {
  content: string[]
  width: number[]
  height: number[]
}

function div ({content,width,height}:DivProps) :string{

  const filledArea = fillArea({content,width,height});
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
