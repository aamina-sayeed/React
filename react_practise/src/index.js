import ReactDOM from 'react-dom/client';
import "./index.css"

const books=[
  {
  title:"Outlive: The Science and Art of Longevity Hardcover",
  author:'Peter Attia MD',
  image:'https://m.media-amazon.com/images/I/411pTpK1xOL._SX383_BO1,204,203,200_.jpg',
  id:1,
 },
 {
  title:"Atomic Habits: The life-changing million copy bestseller ",
  author:'James Clear',
  image:'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  id:2,
 }
]


const BookList=()=>{

  return (
    <section className='book-list'>
      {
        books.map((book)=>{
            return (
              <Book {...book} key={book.id}/>
            )
        })
      }
    </section>
  )
}


const Book=({image,title,author,key})=>{
  return (
  <article className='book'>
    
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <h4 >{author}</h4>
    <h2>{key}</h2>
  </article>
)}




const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)

