import ReactDOM from 'react-dom/client';
import "./index.css"
import {books} from "./books.js"
import Book from "./Book.js"

const BookList=()=>{
  const someValue="abc"
const displayValue=()=>{
    console.log(someValue) //same value for all compnent instances in book no matter which book
}

const getBook=(id)=>{
  const book=books.find((book)=>book.id===id)
  //the find() method returns the value of the first element that passes a test.
  console.log(book) //to get diff values for different book instances of book component 
  //use wrapper or anyonymous fn 
}
  return (
    <>
    <h1>Amazon Best Sellers</h1>
    <section className='book-list'>
      {/* <EventExamples/> */}
      {
        books.map((book,index)=>{
            return (
              <Book {...book} displayValue={displayValue} getBook={getBook} number={index}/>
            )
        })
      }
    </section>
    </>
  )
}

const EventExamples=()=>{
  const handleFormInput=(e)=>{
    // alert('handle form input')
    console.log(e.target.name)
    console.log(e.target.value)
  }
  const handleButtonClick=(e)=>{
    // alert('handle button click')
    console.log(e)
    console.log(e.target.value)
  }
  const handleFormSubmission=(e)=>{
   console.log("form submitted")
   e.preventDefault() //no page reload we will handle form subkission oursleves instead of sending to some url 
  }

  return <section>
    <form action="" onSubmit={handleFormSubmission}>
      <h2>Typical form</h2>
      <input type="text" name='example' style={{margin:'1rem 0'}}  onChange={handleFormInput}/>
    <button  type='submit' onClick={handleFormSubmission}>Submit</button>
      </form>
    <div>
    <button onClick={handleButtonClick}>Click me</button>
    </div>
  </section>
}




const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)

