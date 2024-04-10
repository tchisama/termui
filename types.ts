
export type WindowProps = {
  text?:string
  content?:{
      [key:string]:WindowProps 
  }
  widthPersent?:number
  heightPersent?:number
}
