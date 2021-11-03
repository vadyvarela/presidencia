export default function CitacoesCard(props) {
  return (
    <div className="mb-20 mt-10">
      <p className="mr-6">
        <p className=" text-sm text-corpo leading-relaxed flex flex-row justify-between"> 
          <div><img width={40} height={40} src="img/q1.svg" /></div> 
          <div className="mx-2 text-base">
           {props.text}
           <small className="mt-5 text-xs text-corpo block"> {props.when} </small>
          </div>
          <div className="flex items-end"><img width={40} height={40} src="img/q1.svg" /></div>
        </p>
      </p>
      
    </div>
  )
}
