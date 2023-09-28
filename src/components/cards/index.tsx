import meias from '../../assets/meias.png'
import chaveiro from '../../assets/chaveiro.png'
import camisa from '../../assets/Character.png'
import copo from '../../assets/copo.png'

export function Cards(){
	return(
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-lg font-extrabold text-white p-5'>Todos os jogos tem premiações!</h1>
			<div className='gap-4 flex flex-col'>
				<div className="w-[260px] h-[340px] bg-[#F1C9FF] flex items-center justify-center flex-col p-4">
					<img src={meias} alt="" />
					<button className='shadow-custom w-[210px] h-[40px] bg-white'>PAR DE MEIAS</button>
				</div>
				<div className="w-[260px] h-[340px] bg-[#9F00D7] flex items-center justify-center flex-col p-4">
					<img src={chaveiro} alt="" />
					<button className='shadow-custom w-[210px] h-[40px] bg-white'>CHAVEIRO FLIPERAMA</button>
				</div>
				<div className="w-[260px] h-[340px] bg-[#DE98FF] flex items-center justify-center flex-col p-4">
					<img src={camisa} alt="" />
					<button className='shadow-custom w-[210px] h-[40px] bg-white'>CAMISA MORTAL KOMBAT</button>
				</div>
				<div className="w-[260px] h-[340px] bg-[#FFFFFF] flex items-center justify-center flex-col p-4">
					<img src={copo} alt="" />
					<button className='shadow-custom w-[210px] h-[40px] bg-white'>COPO XBOX</button>
				</div>
			</div>
		</div>
	)
}