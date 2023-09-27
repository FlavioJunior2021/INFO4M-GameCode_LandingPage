import logogeek from '../../assets/geek.png'

export function GeekPlus(){
	return(
		<div className="flex flex-col justify-center items-center content-center pt-[46px] mb-10">
			<h1 className="text-[40px] text-white text-center">Patrocínio da<br/>Geek Plus Store!</h1>
			<img src={logogeek} alt="" className='pt-[24px]'/>
			<button className='bg-[#C845F6] bg-gradient-to-r from-pink-500 via-transparent to-transparent rounded-sm text-white mt-[68px] font-semibold text-[20px] inline-flex h-[50px] p-0 px-[48px] py-0 justify-center items-center gap-10 flex-shrink-0'>
				<a href="https://instabio.cc/geekplusstore" target='_blank'>
					CONHEÇA CLICANDO AQUI
				</a>
			</button>
		</div>
	)
}