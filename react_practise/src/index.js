import ReactDOM from 'react-dom/client';
import "./index.css"
//Add id key and spread operator 2:46:00

const firstBook={
   title:"Outlive: The Science and Art of Longevity Hardcover",
   author:'Peter Attia MD',
   image:'https://m.media-amazon.com/images/I/411pTpK1xOL._SX383_BO1,204,203,200_.jpg'
  }

const secondBook={
    title:"Atomic Habits: The life-changing million copy bestseller ",
    author:'James Clear',
    image:'https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
   }

const BookList=()=>{
  return <section className='book-list'>
    <Book title={firstBook.title} author={firstBook.author.toUpperCase()} image={firstBook.image}/>
    < Book title={secondBook.title} author={secondBook.author.toUpperCase()} image={secondBook.image}/>
   
  </section>
}

const Book=({image,title,author})=>{
  return (
  <article className='book'>
    
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <h4 >{author}</h4>

  </article>
)}




const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)

