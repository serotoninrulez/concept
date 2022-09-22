import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useEffect } from 'react'

import './aufbau_style.css'


const Aufbau: React.FC = () => {

	const firstRowControl = useAnimation()
	const secondRowControl = useAnimation()
	const thirdRowControl = useAnimation()
	const forthRowControl = useAnimation()
	const fifthRowControl = useAnimation()

	const [ firstRowRef, firstRowInView ] = useInView()
	const [ secondRowRef, secondRowInView ] = useInView()
	const [ thirdRowRef, thirdRowInView ] = useInView()
	const [ forthRowRef, forthRowInView ] = useInView()
	const [ fifthRowRef, fifthRowInView ] = useInView()

	const flyFromRightVariant = {
		visible: { opacity: 1, x: 0, transition:{duration: 3}},
		hidden: { opacity: 0, x: 500, transition:{duration: 3}}
	}

	useEffect(()=> {
		if(firstRowInView) {
			firstRowControl.start('visible')
		} else {
			firstRowControl.start('hidden')
		}
	}, [firstRowControl, firstRowInView])

	useEffect(()=> {
		if(secondRowInView) {
			secondRowControl.start('visible')
		} else {
			secondRowControl.start('hidden')
		}
	}, [ secondRowControl, secondRowInView])

	useEffect(()=> {
		if(thirdRowInView) {
			thirdRowControl.start('visible')
		} else {
			thirdRowControl.start('hidden')
		}
	}, [thirdRowControl, thirdRowInView])

	useEffect(()=> {
		if(forthRowInView) {
			forthRowControl.start('visible')
		} else {
			forthRowControl.start('hidden')
		}
	}, [forthRowControl, forthRowInView])

	useEffect(()=> {
		if(fifthRowInView) {
			fifthRowControl.start('visible')
		} else {
			fifthRowControl.start('hidden')
		}
	}, [fifthRowControl, fifthRowInView])

	const erste2Monate = '15 Unterrichtseinheiten mit professionellen Tanz- / Gesang- / Schauspielunterricht von jeweils 90min je Einheit.'
	const ersteAudition = 'In der ersten Audition werden die Fähigkeiten unter Beweis gestellt. Wer erfolgreich ist steigt vom Anwärter zum Trainee auf und qualifiziert sich für die 2. Audition.'
	const zweiteAudition = 'Hier werden die Fähigkeiten erneut auf die Probe gestellt. Wer erfolgt qualifiziert sich für die 3. Audition.'
	const dritteAudition = 'Wer es bis hier schafft und auch die letzte Audition bewältigt, der darf am Traineeship Programm teilnehmen.'


	
	return (
		<div className="aufbau">

			<h1>Aufbau der Ausbildung</h1>
			<img className='aufbau--image' src={require('../../assets/images/aufbau.jpeg')} />

			<h2 className='aufbau-subtitle' >The Idol Concept</h2>
			
			
			<div className='aufbau-row' >
				<h2>Monate</h2>
				<div className='aufbau--text--column'>
				</div>
			</div>

			<motion.div 
				ref={firstRowRef}
				variants={flyFromRightVariant}
				animate={firstRowControl}
				initial='hidden'
				className="aufbau-row">
				
				<h1>01 - 02</h1>
				<div className='aufbau--text--column' >
					<h2>Basic Training</h2>
					<p className='part-text'> {erste2Monate}</p>
				</div>
			</motion.div>

			<div className="row">
				<div className='aufbau--divider'></div>
				
				
			</div>
			<motion.div 
				ref={secondRowRef}
				variants={flyFromRightVariant}
				animate={secondRowControl}
				initial='hidden'
				className="aufbau-row">

				<h1>03 - 04</h1>
				<div className='aufbau--text--column' >
					<h2>1. Audition</h2>
					<p className='part-text'> {ersteAudition}</p>
				</div>
			</motion.div>
	
			<div className='aufbau--divider'></div>
			
			<motion.div 
				ref={thirdRowRef}
				variants={flyFromRightVariant}
				animate={thirdRowControl}
				initial='hidden'
				className='aufbau-row'>
				
				<div className='aufbau--part' >
					<h1 className='aufbau--part--text' >05 - 06</h1>
				</div>
					<div className='aufbau--text--column' >
					<h2>2. Audition</h2>
					<p className='part-text'> {zweiteAudition}</p>
				</div>
			</motion.div>

			<div className='aufbau--divider'></div>

			<motion.div 
				ref={forthRowRef}
				variants={flyFromRightVariant}
				animate={forthRowControl}
				initial='hidden'
				className='aufbau-row'>

				<div className='aufbau--part' >
					<h1 className='aufbau--part--text' >07 - 08</h1>
				</div>
					<div className='aufbau--text--column' >
					<h2>3. Audition</h2>
					<p className='part-text'> {dritteAudition}</p>
				</div>
			</motion.div>
		
		</div>
	)
}

export default Aufbau