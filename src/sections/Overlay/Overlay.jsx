/*
	Overlay section after Welcome section, containg numeric infos about the event
*/


import './Overlay.scss'

import Mic from '../../icons/Mic'
import Person from '../../icons/Person'
import Coffee from '../../icons/Coffee'
import Book from '../../icons/Book'
import { useStaticElement } from '../../tools/datoCmsTools'


const Overlay = () => {
	const [registrationOnline] = useStaticElement('registrationOnline', false)
			
	const contentClass = 'content' + (!(registrationOnline) ? ' no-online' : '')

	return (
		<div id="overlay">
			<div className="bg bg-1"></div>
			<div className="bg bg-2"></div>
			<div className='container'>
				<div className={contentClass}>
					<div className='infobox'>
						<Mic />
						<div>
							<div className='title'>11</div>
							<div className='subtitle'>előadás</div>
						</div>
					</div>
					<div className='infobox'>
						<Person />
						<div>
							<div className='title'>22</div>
							<div className='subtitle'>előadó</div>
						</div>
					</div>
					<div className='infobox'>
						<Coffee />
						<div>
							<div className='title'>200</div>
							<div className='subtitle'>helyszíni férőhely</div>
						</div>
					</div>
					{registrationOnline  && 
						<div className='infobox'>
							<Book />
							<div>
								<div className='title'>1000+</div>
								<div className='subtitle'>online férőhely</div>
							</div>
						</div>
					}
				</div>
			</div>
		</div>
	)
}

export default Overlay