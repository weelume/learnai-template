import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {InnerHero,Contact} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"联系我们",en:"Contact"}} description={{zh:"个人学习、团队培训或合作，从一段对话开始。",en:"Start a conversation about learning, team training, or collaboration."}}/><Contact locale={locale}/></Shell>}
