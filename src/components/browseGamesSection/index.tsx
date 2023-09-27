import fifa from '../../assets/image 22.png'
import mk from '../../assets/mk.png'
import justdance from '../../assets/justdance.png'

export function BrowseGamesSection(){
	return(
		<div className="h-[296px] flex flex-col text-center items-center pt-">
			<div className="">
				<h1 className="text-[40px] text-white">
					Inscrições por<br/>
					apenas R$ 3,00
				</h1>
				<span className="text-[25px] font-light text-white">em cada modalidade</span>
			</div>
			<div className='pt-[24px] flex flex-row justify-center content-center'>
				<div className="relative flex flex-row gap-3">
					<div className="w-[110px] h-[110px] bg-[#9F00D7] relative">
						<img src={fifa} alt="fifa" className='w-full h-full translate-x-1 -translate-y-2 absolute inset-0' />
					</div>
					<div className="w-[110px] h-[110px] bg-[#9F00D7]">
						<img src={mk} alt="fifa" className='w-full h-full translate-x-1 -translate-y-2' />
					</div>
					<div className="w-[110px] h-[110px] bg-[#9F00D7] relative">
						<img src={justdance} alt="fifa" className='w-full h-full translate-x-1 -translate-y-2 absolute inset-0' />
					</div>
				</div>
			</div>
		</div>
	)
}