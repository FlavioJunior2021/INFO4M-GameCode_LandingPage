import fifa from '../../assets/image 22.png'
import mk from '../../assets/mk.png'
import justdance from '../../assets/justdance.png'

export function BrowseGamesSection(){
	return(
		<div className="h-[296px] flex flex-col text-center items-center pt-[26px]">
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
			<button className='bg-[#C845F6] bg-gradient-to-r from-pink-500 via-transparent to-transparent rounded-sm text-white mt-[68px] font-semibold text-[20px] inline-flex h-[50px] p-0 px-[48px] py-0 justify-center items-center gap-10 flex-shrink-0'>
				<a href="https://forms.gle/MJmRkj6YGwGfvNPfA" target='_blank'>
					LINK PARA INSCRIÇÂO
				</a>
			</button>
		</div>
	)
}