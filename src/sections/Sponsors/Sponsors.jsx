import Section from "../../components/Section/Section"
import Text from "../../components/Text/Text"
import Title from "../../components/Title/Title"
import './Sponsors.scss'
import telekomLogo from "../../assets/img/sponsors/Telekom.png"
import microsoftLogo from "../../assets/img/sponsors/ms-logo_HU.png"
import ciscoLogo from "../../assets/img/sponsors/cisco2.png"
import pannonLogo from "../../assets/img/sponsors/pannon-mik2.png"
import eltetokLogo from "../../assets/img/sponsors/elte-tok2.png"
import netAcadLogo from "../../assets/img/sponsors/netacad2.png"
import { useStaticElement, useAllElements } from '../../tools/datoCmsTools'
import { StructuredText  } from "react-datocms"

const Sponsor = (props) => {
	return (
		<div className="sponsor">
			{props.link ?
			<a href={props.link} target="_blank" rel="noopener noreferrer"  >
				<img src={props.image} alt={props.name} {...props}/>
			</a>
			:
			<img src={props.image} alt={props.name} {...props}/>} 
		</div>
	)
}

const Sponsors = () => {
	const [sponsorText] = useStaticElement("sponsor") 
	const [sponsorTitlePart1] = useStaticElement("sponsorTitlePart1", false)
    const [sponsorTitlePart2] = useStaticElement("sponsorTitlePart2", false)
	const [allSponsorCategories] = useAllElements("sponsors")
	console.log("allSponsorCategories", allSponsorCategories)
	return <Section container placeholder id="tamogatok">
		<Title>{sponsorTitlePart1} <span className="highlight">{sponsorTitlePart2}</span></Title>
		<Text subtitle>
			<Text description><StructuredText data={sponsorText}></StructuredText></Text>
		</Text>
		{allSponsorCategories && allSponsorCategories.map((category, index) => (
			<>
				<h3 key={index} className="sponsor-category">{category.name}</h3>
				<ul class="logo-gallery">
					{category.sponsor && category.sponsor.map((sponsor, index) => (
						<li>
							<Sponsor key={index} image={sponsor.logo.url} link={sponsor.url} name={sponsor.name} />
						</li>
					))}
				</ul>
			</>
		))}

	</Section>
}

export default Sponsors