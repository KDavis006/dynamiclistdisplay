import {useState} from 'react'

const Dynamiclist = (d) => {
 const [data, setData] = useState(d)
 console.log(data)

 // function for defining of it is going to be horizontal or vertical
 const specifications = () => {
  return (
   (data.orientation === 'horizontal') ? (
    list('horizontal')
   ): (
    list('vertical')
   )
  )
 }

 // function for defining of it is going to be an ordered list or an unordered list
 const list = (o) => {
  return (
   (data.type === 'ol') ? (
    <ol className={o}>
     {data.data.map(x => {
       return (
        <li key={x}>{x}</li>
       )
      })}
     </ol>
    ): (
     <ul className={o}>
      {data.data.map(x => {
       return (
        <li key={x}>{x}</li>
       )
      })}
     </ul>
    )
  )
 }

  return (
    <div className='container'>
     {/* runs the function */}
     {specifications()}
    </div>
  )
}

export default Dynamiclist