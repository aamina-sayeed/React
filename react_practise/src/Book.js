const Book=({image,title,author,id,displayValue,getBook,number})=>{
    const displayTitle=(e)=>{
      console.log(title)
    }
  
    // const wrapper =()=>{
    //   getBook(id)
    // }
    //or use anyonymous fn direclty 
    return (
    <article className='book'>
      
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4 >{author.toUpperCase()}</h4>
      <span className="number">{`#${number+1}`}</span>
      {/* <button onClick={displayValue}>Display Value</button>
      <button onClick={displayTitle}>Display Title</button>
      <button onClick={()=>{getBook(id)}}>Get BOOK</button> */}
    </article>
  )}
  
export default Book  