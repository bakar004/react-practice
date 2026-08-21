function Card(props){
    return(
<div className="bg-green-300 font-bold p-8">
    
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
    <button>{props.btn}</button>
</div> 

    )
}
export default Card;