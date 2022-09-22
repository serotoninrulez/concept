import './footer_style.css'


const Footer: React.FC = () => {


	return (
		<>
			<div className="footer">
				<div className="divider"></div>
				<div className="row">
					<img className='social-media-icon' src={require('../../assets/icons/facebook.png')} />
					<img className='social-media-icon' src={require('../../assets/icons/instagram.png')} />
					<img className='social-media-icon' src={require('../../assets/icons/tiktok.png')} />
					
				</div>
				<div className="divider"></div>
				<div className="row align-center">
					<img className='social-media-icon' src={require('../../assets/icons/whatsapp.png')} />
					<h2>+49 1577 110 3312</h2>
				</div>
				<h2>W-Entertainment</h2>
			
			</div>
		</>
	)
}


export default Footer