import { useQuerySubscription } from "react-datocms";
import { isConstructorDeclaration } from "typescript";
import { useState, useEffect, useMemo } from "react";


const token = "10b039e5d1ce9e04fb646d379aa92e" // process.env.DATO_API_TOKEN // education:next FrontEnd
//const token = "3331fc3477e7df4b7cb85836c2a684" //IOK-landing

export const useStore = () => {
    const initialValues = {
        stages : [],
        presenters : [],
        sponsorCategories : [],
        staticelement: {},
    }
    const query = 
        `{	
            allSpeakers(, first: 100 ) 
            {
                name
                slug
                highlighted
                title
                company
                image {
                    url
                }
            }
            allStages(orderBy: [order_ASC], first: 100) {
                id
                name
                online
                schedule {
                    id
                    start
                    title
                    description
                    speaker {
                        id
                        company
                        name
                        title
                        image {
                            url
                        }
                    }
                }
            }
            allSponsorCategories(, first: 100 ) {
                name
                sponsor {
                    name
                    url
                    logo {
                    url
                    }
                }
            }
            staticelement {
                contactAddress
                contactEmail
                contactPhone
                contactWeb
                createdAt
                id
                info1 {
                  value
                }
                info2 {
                  value
                }
                infoBubbleText1
                infoBubbleText2
                infoBubbleText3
                infoBubbleText4
                infoTitlePart1
                infoTitlePart2
                map1 {
                  value
                }
                map2 {
                  value
                }
                registration {
                  value
                }
                registrationFeedbackCancel {
                  value
                }
                registrationFeedbackError {
                  value
                }
                registrationFeedbackTransaltion {
                  value
                }
                registrationFeedbackWithoutTranslation {
                  value
                }
                registrationFormat {
                  value
                }
                registrationFormatCheckbox
                registrationFormatVip {
                  value
                }
                registrationInfoHybrid {
                  value
                }
                registrationInfoOnlineOnly {
                  value
                }
                registrationInfoOnsiteOnly {
                  value
                }
                registrationOnline
                registrationOnsite
                registrationSuccess {
                  value
                }
                siteLogo {
                  url
                }
                siteTitle
                speaker {
                  value
                }
                sponsor {
                  value
                }
                sponsorTitlePart1
                sponsorTitlePart2
                talk {
                  value
                }
                welcome {
                  value
                }
                welcomeTitlePart1
                welcomeTitlePart2
              }
          }`
    const [data, error] = useQuery2(query, initialValues)
    const {allStages, allSpeakers, allSponsorCategories, staticelement} = data

    const store = useMemo(() => (
        {
            stages: allStages,
            presenters: allSpeakers,
            sponsorCategories: allSponsorCategories,
            staticelement: staticelement
        }
    ), [allStages, allSpeakers, allSponsorCategories, staticelement])

    if (error) console.log("error", error)
    return store
}
    
export const useStaticElement = (staticTextField, isStructuredText = true, isAsset=false) => {
    const store = useStore()
    if (!(store)) return []

    const {staticelement} = store
    //console.log(staticTextField)
    if (!(staticelement)) return []
    const field = staticelement && staticelement[staticTextField]
    //console.log("field", field)
    if (isStructuredText) {
        return [field?.value]
    }
    if (isAsset) {
        console.log("field", field)
        return [field?.url]
    }
    return [field]

}

export const useAllElements = (model) => {
    const store = useStore()
    if (!(store)) return []
    console.log(model, store[model])
    return [store[model]]
}


const useQuery2 = (query, initialValue) => {
	const [result, setResult] = useState(initialValue)
	const { data, error } = useQuerySubscription({
		query,
		token
	})
	useEffect(() => {
		if (data) setResult(Object.keys(data).length === 1 ? data[Object.keys(data)[0]] : data)
	}, [data])
	useEffect(() => {
		setResult(initialValue)
	}, [query])
	return [result, error]
}