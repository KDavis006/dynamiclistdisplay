import {useState} from 'react'

const Dynamiclist = (d) => {
 const [data, setData] = useState(d)
 console.log(data)

 const specifications = () => {
  return (
   (data.orientation === 'horizontal') ? (
    list('horizontal')
   ): (
    list('vertical')
   )
  )
 }

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
     {specifications()}
    </div>
  )
}

export default Dynamiclist