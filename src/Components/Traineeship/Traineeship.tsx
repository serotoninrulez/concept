import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useEffect } from 'react'

import './traineeship_style.css'


const Traineeship: React.FC = () => {


	const firstIconControl = useAnimation()
	const secondIconControl = useAnimation()

	const firstRowControl = useAnimation()
	const secondRowControl = useAnimation()
	const thirdRowControl = useAnimation()
	const forthRowControl = useAnimation()
	const fifthRowControl = useAnimation()
	const sixthRowControl = useAnimation()

	const [ firstIconRef, firstIconInView ] = useInView()
	const [ secondIconRef, secondIconInView ] = useInView()

	const [ firstRowRef, firstRowInView ] = useInView()
	const [ secondRowRef, secondRowInView ] = useInView()
	const [ thirdRowRef, thirdRowInView ] = useInView()
	const [ forthRowRef, forthRowInView ] = useInView()
	const [ fifthRowRef, fifthRowInView ] = useInView()
	const [ sixthRowRef, sixthRowInView ] = useInView()

	const opacitVariant = {
		visible: { opacity: 1, transition:{duration: 3}},
		hidden: { opacity: 0, transition:{duration: 3}}
	}

	const flyFromLeftVariant = {
		visible: { scale: 1, opacity: 1, x: 0, y: 0, transition:{duration: 0.4}},
		hidden: { scale: 0, opacity: 0, x: -200, y: 200, transition:{duration: 0.4}}
	}
	const flyFromRightVariant = {
		visible: { scale: 1, opacity: 1, x: 0, y: 0, transition:{duration: 0.4}},
		hidden: { scale: 0, opacity: 0, x: 200, y: 200, transition:{duration: 0.4}}
	}
	const flyFromMiddleVariant = {
		visible: { scale: 1, opacity: 1, x: 0, y: 0, transition:{duration: 0.4}},
		hidden: { scale: 0, opacity: 0, x: 0, y: 200, transition:{duration: 0.4}}
	}

	useEffect(()=> {
		if(firstIconInView) {
			firstIconControl.start('visible')
		} else {
			firstIconControl.start('hidden')
		}
	}, [firstIconControl, firstIconInView])

	useEffect(()=> {
		if(secondIconInView) {
			secondIconControl.start('visible')
		} else {
			secondIconControl.start('hidden')
		}
	}, [secondIconControl, secondIconInView])

	useEffect(()=> {
		if(firstRowInView) {
			firstRowControl.start('visible')
		} 
	}, [firstRowControl, firstRowInView])

	useEffect(()=> {
		if(secondRowInView) {
			secondRowControl.start('visible')
		} 
	}, [ secondRowControl, secondRowInView])

	useEffect(()=> {
		if(thirdRowInView) {
			thirdRowControl.start('visible')
		} 
	}, [thirdRowControl, thirdRowInView])

	useEffect(()=> {
		if(forthRowInView) {
			forthRowControl.start('visible')
		} 
	}, [forthRowControl, forthRowInView])

	useEffect(()=> {
		if(fifthRowInView) {
			fifthRowControl.start('visible')
		} 
	}, [fifthRowControl, fifthRowInView])

	useEffect(()=> {
		if(sixthRowInView) {
			sixthRowControl.start('visible')
		} 
	}, [sixthRowControl, sixthRowInView])

	const subText = 'Mit dem bestehen der 3. Audition qualifizieren sich die Teilnehmer für das Traineeships.'

	return (
		<div className="traineeship">
			<div className='divider'></div>
			<h1>Traineeship</h1>
			<p className='traineeship--subtext' >{subText}</p>
			<div className='traineeship--overview'>
				<motion.div 
					animate={firstIconControl}
					variants={opacitVariant}
					initial='hidden'
					ref={firstIconRef} 
					className='traineeship--row'>
						<div className="traineeship--icon--container">
							<img className='traineeship--icon' alt='clock' src={require('../../assets/icons/clock(1).png')} />
						</div>
						
						<h2>2 - 3 Monate</h2>
				</motion.div>
				<motion.div 
					animate={secondIconControl}
					variants={opacitVariant}
					initial='hidden'
					ref={secondIconRef} 
					className='traineeship--row'>
					<div className="traineeship--icon--container">
					<img className='traineeship--icon' alt='repeat' src={require('../../assets/icons/repeat.png')} />
					</div>
						<h2>2 - 3 x pro Woche</h2>
				</motion.div>
			</div>
			
			
			<h1>Tanz / Gesang / Schaupiel</h1>			
			<h1>+</h1>			
			<div className='traineeship--images'>
				<motion.div 
				animate={firstRowControl}
				variants={flyFromLeftVariant}
				initial='hidden'
				ref={firstRowRef} >
					<h2 className='traineeship--image--title'  >Bandbildung</h2>
					<img className='traineeship--image' alt='production' src={require('../../assets/images/Production3.JPG')} />
				</motion.div>
				<motion.div
					animate={secondRowControl}
					variants={flyFromMiddleVariant}
					initial='hidden'
					ref={secondRowRef}>
						<h2  className='traineeship--image--title' >Social Media</h2>
						<img className='traineeship--image' alt='social media' src={require('../../assets/images/Social Media.JPG')} />
				</motion.div>
				<motion.div
					animate={thirdRowControl}
					variants={flyFromRightVariant}
					initial='hidden'
					ref={thirdRowRef}>
						<h2 className='traineeship--image--title' >Recording</h2>
						<img className='traineeship--image' alt='studio aufnahme' src={require('../../assets/images/Studio Aufnahme.jpg')} />
				</motion.div>
				<motion.div
					animate={forthRowControl}
					variants={flyFromLeftVariant}
					initial='hidden'
					ref={forthRowRef}>
						<h2 className='traineeship--image--title' >Production</h2>
						<img className='traineeship--image' alt='production' src={require('../../assets/images/Production2.JPG')} />
				</motion.div>
				<motion.div
					animate={fifthRowControl}
					variants={flyFromMiddleVariant}
					initial='hidden'
					ref={fifthRowRef}>
						<h2 className='traineeship--image--title' >Bootcamps</h2>
						<img className='traineeship--image' alt='bootcamp' src={require('../../assets/images/Tanz.jpeg')} />
				</motion.div>
				<motion.div
					animate={sixthRowControl}
					variants={flyFromRightVariant}
					initial='hidden'
					ref={sixthRowRef}>
						<h2 className='traineeship--image--title'  >Probeauftritte & Videodrehs</h2>
						<img className='traineeship--image' alt='videodreh' src={require('../../assets/images/videodreh.jpeg')} />
				</motion.div>
			</div>
			
			
			
		</div>
	)
}

export default Traineeship