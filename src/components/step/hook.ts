export default (style:string,val: number) => {
  const elements = document.querySelectorAll(style)
  elements[val].scrollIntoView()
}
