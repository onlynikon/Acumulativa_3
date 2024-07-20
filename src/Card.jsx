export const Card = ({tarea,index, handleDelete}) => {
    const card_importante = {
      backgroundColor:'red' 
    }
    return (
      <div style={{backgroundColor:tarea.is_checked ? '#EC7063 ':'#FFFFCC', width:'220px',border:'1px solid black', padding:'0 1rem', transform: tarea.is_checked ? 'rotate(5deg)' : 'rotate(-5deg)'}}>
        <a style={{width:'100%',paddingLeft:'98%',textDecoration:'none',color:'black'}} href="#" onClick={(e) => {e.preventDefault();handleDelete(index)}}>X</a>
        <h3 style={{textAlign:'center',fontSize:'2rem',margin:'0rem 0'}}>{tarea.titulo}</h3>
        <p>{tarea.descripcion}</p>
        
      </div>
    )
  }
  