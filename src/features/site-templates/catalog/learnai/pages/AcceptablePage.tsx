import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {InnerHero,Policy} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"使用规范",en:"Acceptable Use"}} description={{zh:"尊重他人 保护信息 认真练习",en:"Respect others, protect information, and practice responsibly."}}/><Policy locale={locale} kind="acceptable-use"/></Shell>}
