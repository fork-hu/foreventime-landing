import './Footer.scss'
//import HttpLogo from '../assets/img/http-white.png'
import Location from '../icons/Location'
import Phone from '../icons/Phone'
import Mail from '../icons/Mail'
import Web from '../icons/Web'
import Text from "../components/Text/Text"
import { useStaticElement } from '../tools/datoCmsTools'

const Footer = () => {
	const [contactAddress] = useStaticElement("contactAddress", false)
	const [contactPhone] = useStaticElement("contactPhone", false)
	const [contactEmail] = useStaticElement("contactEmail", false)
	const [contactWeb] = useStaticElement("contactWeb", false)

	return <footer>
		<div className="container">
			<div className='links'>
				<div className='title'>Kapcsolat</div>
				<div className='contact'>

					{contactAddress && <><Location /> {contactAddress}</>}
					{contactPhone && <><Phone /> {contactPhone}</>}
					{contactEmail && <><Mail /> <a href={`mailto:${contactEmail}`}>{contactEmail}</a></>}
					{contactWeb && <><Web /> <a target="_blank" rel="noopener noreferrer" href={contactWeb}>{contactWeb}</a></>}

				</div>


			</div>
			<div className='copyright'>
				A regisztrációs portált és a virtuális konferencia központot a <a href="https://http-alapitvany.hu" target="_blank" rel="noopener noreferrer" className="links">HTTP Alapítvány</a> bztosítja.
				<br />
				Az Alapítvány elkötelezetten támogatja az informatikai képzésben dolgozó tanárokat és oktatókat.
				<br />
				Az Infotanár Mentor Program jelenleg több mint 2500 lelkes infotanárból álló közösség.
				<br />&nbsp;
				<div className="links">
					<div style={{marginBottom:"1rem"}}>
						Infotanár Mentor Program<br />
						<Web /> <a target="_blank" rel="noopener noreferrer" href="https://itmp.hu">itmp.hu</a>
					</div>
				</div>
				&copy; HTTP Alapítvány<br />
				Minden jog fenntartva
				</div>

		</div>
	</footer>
}

export default Footer