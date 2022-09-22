import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

import './about_style.css'


const About: React.FC = () => {

	const definitionControl = useAnimation()
	const tanzControl = useAnimation()
	const mentalControl = useAnimation()
	const [ definitionRef, defenitionInView ] = useInView()
	const [ tanzRef, tanzInView ] = useInView()
	const [ mentalRef, mentalInView ] = useInView()

	const opacityVariant = {
		visible: { scale: 1, opacity: 1,  transition:{duration: 3} },
		hidden: { scale: 0.9, opacity: 0,  transition:{duration: 3} },
	  }

	const jumpFromTopLeft = {
		visible: { x: 0, y: 0, opacity: 1,  transition:{duration: 3} },
		hidden: { x: -100, y: -100, opacity: 0,  transition:{duration: 3} },
	}
	const jumpFromTop = {
		visible: { x: 0, y: 0, opacity: 1,  transition:{duration: 3} },
		hidden: { x: 0, y: -100, opacity: 0,  transition:{duration: 3} },
	}
	const jumpFromTopRight = {
		visible: { x: 0, y: 0, opacity: 1,  transition:{duration: 3} },
		hidden: { x: 100, y: -100, opacity: 0,  transition:{duration: 3} },
	}

	  useEffect(()=> {
		if(defenitionInView) {
			definitionControl.start("visible")
		}
		if(!defenitionInView){
			definitionControl.start("hidden")
		}
	  }, [definitionControl, defenitionInView])
	 
	  useEffect(()=> {
		if(tanzInView) {
			tanzControl.start("visible")
		}
		if(!tanzInView){
			tanzControl.start("hidden")
		}
	  }, [tanzControl, tanzInView])
	  
	  useEffect(()=> {
		if(mentalInView) {
			mentalControl.start("visible")
		}
		if(!mentalInView){
			mentalControl.start("hidden")
		}
	  }, [mentalControl, mentalInView])


	

	const description = 'Bei Concept get es um die Ausbildung junger Talente. Das Concept zielt auf eine professionelle Ausbildung, welche die Teilnehmer befähigt eine Performance zu absolvieren. Eine gute Performace setzt sich aus den drei Grundsteinen zusammen:'
	const tanzText = 'Zu einer guten Performance gehören passende Bewegungen'
	const schauspielText = 'Jede Perfomance ist auch gleichzeitig eine Show. Die Ausbildung beinhaltet alle schauspielerischen Elemente, die dabei zum Einsatz kommen.'
	const gesangsText = 'Die Stimme ist das was gehört wird. Um die Perfomance vollkommen zu machen wird diese in der Ausbildung trainiert.'

	return (
		<>
			<div className="about">

				<motion.h3
					ref={definitionRef}
					variants={opacityVariant}
					animate={definitionControl}
					initial='hidden'
					className="description">
						{description}
				</motion.h3>
				<img className='header--image' src={require('../../assets/images/Bandbildung.JPG')} />
				<div className='row'>
					<motion.div 
						ref={tanzRef}
						variants={jumpFromTopRight}
						animate={tanzControl}
						initial='hidden'
						className='section'>
						<h2>Tanz</h2>
						<img className='pic' src={require('../../assets/icons/dancing.png')} />
						<p className='pic--text'  >{tanzText}</p>
					</motion.div>
					<motion.div 
						ref={tanzRef}
						variants={jumpFromTop}
						animate={tanzControl}
						initial='hidden'
						className='section'>
						<h2>Schauspiel</h2>
						<img className='pic' src={require('../../assets/icons/theater.png')} />
						<p className='pic--text' >{schauspielText}</p>
					</motion.div>
					<motion.div 
						ref={tanzRef}
						variants={jumpFromTopLeft}
						animate={tanzControl}
						initial='hidden'
						className='section'>
						<h2>Gesang</h2>
						<img className='pic' src={require('../../assets/icons/microphone.png')} />
						<p className='pic--text' >{gesangsText}</p>
					</motion.div>
					
				</div>
				<motion.div 
						ref={mentalRef}
						variants={opacityVariant}
						animate={mentalControl}
						initial='hidden'
					className='mentale-staerke--section'>
						<h2>Mentale Stärke</h2>
						<img className='pic' src={require('../../assets/icons/girl-power.png')} />
						<p className='mentale-staerke--text' >
							Wer vor Menschen auftreten möchte braucht ebenfalls Mut. Die Ausbildung von Conzept beinhaltet die Aus- und Weiterbildung der mentalen Stärke. Die Teilnehmer werden Schrittweise an immer herausfordernde Aufgaben herangeführt, welche dafür sorgen, dass das Selbstbewusstsein sowie das Selbstwertgefühl gestärkt werden. Ziel der Ausbildung is nicht nur das Erlernen von Fähigkeiten, die für die Perfomance wichtig sind, sondern ebenfalls die Bildung hin zu einer starken Persönlichkeit. 
						</p>
					</motion.div>
				<div className='divider'></div>
			</div>
		</>
	)
}


export default About