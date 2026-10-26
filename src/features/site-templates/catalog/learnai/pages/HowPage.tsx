import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {PracticePanel,HowItWorks} from '../Sections'
import {InnerHero} from '../InnerPages'
import {LanguagePractice} from '../LanguagePractice'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"如何开始",en:"How it works"}} description={{zh:"设定目标 开始练习 记录进步",en:"Set a goal, start practicing, and reflect on progress."}}/><HowItWorks locale={locale}/><PracticePanel locale={locale}/><LanguagePractice locale={locale}/></Shell>}
