import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {InnerHero,Policy} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"Cookie 设置",en:"Cookie Settings"}} description={{zh:"了解当前模板的 Cookie 与偏好设置",en:"Understand this template’s cookies and preferences."}}/><Policy locale={locale} kind="cookies"/></Shell>}
