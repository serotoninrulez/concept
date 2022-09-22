import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useEffect } from 'react'

import './header_style.css'


const Header: React.FC = () => {

	const titleControl = useAnimation()
	const subtitleControl = useAnimation()
	const titleTextControl = useAnimation()
	const [ titleRef, titleInView ] = useInView()
	const [ subtitleRef, subtitleInView ] = useInView()
	const [ titleTextRef, titleTextInView ] = useInView()

	const opacityVariant = {
		visible: { y: 0, scale: 1, opacity: 1, transition:{duration: 0.5}},
		hidden: { y: 200, scale: 0, opacity: 0, transition:{duration: 0.5}}
	}

	useEffect(()=> {
		if(titleInView) {
			titleControl.start('visible')
		} else {
			titleControl.start('hidden')
		}
	}, [ titleControl, titleInView ])

	useEffect(()=> {
		if(subtitleInView) {
			subtitleControl.start('visible')
		} else {
			subtitleControl.start('hidden')
		}
	}, [ subtitleControl, subtitleInView ])

	useEffect(()=> {
		if(titleTextInView) {
			titleTextControl.start('visible')
		} else {
			titleTextControl.start('hidden')
		}
	}, [ titleTextControl, titleTextInView ])


	return (
		<div className="header">
			<div className="video-container">

			<video 
			className='video'
			muted
			autoPlay
			playsInline
			loop
			src={require('../../assets/videos/video.MP4')} />
			
			</div>

			<motion.h1 
				ref={titleRef}
				variants={opacityVariant}
				animate={titleControl}
				initial='hidden'
				className='header--title'  >Concept
			</motion.h1>
			<motion.h2  
				ref={subtitleRef}
				variants={opacityVariant}
				animate={subtitleControl}
				initial='hidden'
				className='header--title--text' >Tanz | Gesang | Schauspiel</motion.h2>

			<motion.h3 
				ref={titleTextRef}
				variants={opacityVariant}
				animate={titleTextControl}
				initial='hidden'
				className='header--subtitle' >Die professionelle Ausbildung für junge Talente</motion.h3>
		
			<div className='divider'></div>

			
			
		</div>
	)
}


export default Header