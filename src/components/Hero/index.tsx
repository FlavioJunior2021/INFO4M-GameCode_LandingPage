import subzero from '../../assets/subzero.png'
import logo from '../../assets/logo_info4m_1 2.png'

export function Hero(){
	return(
		<div className="max-sm:flex flex-col items-center justify-center w-full h-screen bg-center bg-cover" style={{backgroundImage: 'url("https://www.creativeuncut.com/gallery-18/art/mk9-background-mileena.jpg")'}}>
			<div className="flex flex-col items-center">
				<h1 className="text-white text-7xl text-center font-bold">TORNEIO<br/>DE JOGOS</h1>
				<img src={subzero} alt="" className='absolute w-[375px] h-80 bottom-0 left-0' />
			</div>
			<img src={logo} alt="" className='bottom-0 left-4 absolute w-16 h-16' />
		</div>
	)
}