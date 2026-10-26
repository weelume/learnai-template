import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {InnerHero,About} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"关于我们",en:"About"}} description={{zh:"让英语练习成为每天都能轻松开始的事",en:"Make English practice easy to begin, every day."}}/><About locale={locale}/></Shell>}
