import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {Hero,FeatureGrid,PracticePanel,HowItWorks,Integrations,Testimonials,FAQ} from '../Sections'
import {LanguagePractice} from '../LanguagePractice'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props} home><Hero locale={locale}/><FeatureGrid locale={locale}/><LanguagePractice locale={locale}/><PracticePanel locale={locale}/><HowItWorks locale={locale}/><Integrations locale={locale}/><Testimonials locale={locale}/><FAQ locale={locale}/></Shell>}
