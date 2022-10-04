import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import Title from "../../components/Title/Title"
import Bubble from "../../components/Bubble/Bubble"
import "./Info.scss"
import LightBulb from "../../icons/LightBulb"
import Networking from "../../icons/Networking"
import Star from "../../icons/Star"
import Tools from "../../icons/Tools"
import { StructuredText  } from "react-datocms"
import { useStaticElement } from '../../tools/datoCmsTools'

const Info = () => {
	const [infoText1] = useStaticElement("info1") 
	const [infoText2] = useStaticElement("info2") 
	const [infoBubbleText1] = useStaticElement("infoBubbleText1", false)
	const [infoBubbleText2] = useStaticElement("infoBubbleText2", false)
	const [infoBubbleText3] = useStaticElement("infoBubbleText3", false)
	const [infoBubbleText4] = useStaticElement("infoBubbleText4", false)
	const [infoTitlePart1] = useStaticElement("infoTitlePart1", false)
    const [infoTitlePart2] = useStaticElement("infoTitlePart2", false)
	
	return <Section container placeholder id="info-section">
		<Title>{infoTitlePart1} <span className="highlight">{infoTitlePart2}</span></Title>
		<Text subtitle><StructuredText data={infoText1}/></Text>

		<div className='row'>
				<div className='col-lg-6 col-12'>
					<div className='bubbles'>
						<Bubble icon color='primary' size='extra-large' title={<LightBulb />} subtitle={infoBubbleText1} corners={['bottom-right']} />
						<Bubble icon color='light' size="large" title={<Networking />} subtitle={infoBubbleText2} corners={['bottom-left']} />
						<Bubble icon color='light' size="large" title={<Star />} subtitle={infoBubbleText3} corners={['top-right']} />
						<Bubble icon color='light' size="large" title={<Tools />} subtitle={infoBubbleText4} corners={['top-left']} />
					</div>
				</div>
				<div className='col-lg-6 col-12'>
					<Title subtitle>Töltődj fel a legfrisebb információkkal!</Title>
					<Text>
						<StructuredText data={infoText2}/>
					</Text>
				</div>
			</div>
	</Section>
}

export default Info