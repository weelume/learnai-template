import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {PracticePanel} from '../Sections'
import {InnerHero} from '../InnerPages'
import {LanguagePractice} from '../LanguagePractice'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"情境练习",en:"Practice"}} description={{zh:"选择一个场景 说出你的第一句话",en:"Choose a scenario and start your first conversation."}}/><LanguagePractice locale={locale}/><PracticePanel locale={locale}/></Shell>}
