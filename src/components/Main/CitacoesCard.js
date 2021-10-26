import Image from 'next/image'
import q1 from '../../../public/img/q1.svg'
import q2 from '../../../public/img/q2.svg'

export default function CitacoesCard(props) {
  return (
    <div className="mb-20 mt-10">
      <p className="mr-6">
        <p className=" text-sm text-corpo leading-relaxed flex flex-row justify-between"> 
          <div><Image width={40} height={40} layout="fixed" src={q2} /></div> 
          <div className="mx-2 text-base">
           {props.text}
           <small className="mt-5 text-xs text-corpo block"> {props.when} </small>
          </div>
          <div className="flex items-end"><Image width={40} height={40} layout="fixed" src={q1} /></div>
        </p>
      </p>
      
    </div>
  )
}
