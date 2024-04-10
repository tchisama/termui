
export type WindowProps = {
  content?:{
      [key:string]:WindowProps 
  }| string
  widthPersent?:number
  heightPersent?:number
}
