import logo from '../../assets/logo_info4m_1 2.png'
import instagram from '../../assets/instagram.svg'

export function Regulation(){
	return(
		<div>
			<div className="flex h-[260px] bg-gradient-to-t from-transparent to-black flex-col justify-center items-center content-center gap-4 bg-cover" style={{backgroundImage: 'url("https://m.media-amazon.com/images/I/61v2T6GhakL._AC_SL1138_.jpg")'}}>
				<h1 className="text-lg text-white text-[46px] text-center pt-40 ">REGULAMENTO</h1>
				<a href='https://drive.google.com/drive/folders/1Hv3J1ypZSy6-YejkCCbzVnB0lVj_pxiq?hl=pt-BR' className="text text-zinc-400 text-center">CLIQUE AQUI PARA<br/>BAIXAR</a>
			</div>
			<footer className="flex justify-center items-center flex-col gap-8">
				<img src={logo} alt="" className='w-[90px]' />
				<div className='flex flex-row justify-around w-full'>
					<p className='text-white'>ENTRE EM CONTADO</p>
					<a href='https://www.instagram.com/infortunados.nc/'><img src={instagram} alt="" /></a>
				</div>
				<p className='text-white text-sm'>© [2023] INFO4M. Todos os direitos reservados.</p>
				<p className='text-white text-sm'>Desenvolvido pro Bruno e Flávio</p>
			</footer>
		</div>
	)
}