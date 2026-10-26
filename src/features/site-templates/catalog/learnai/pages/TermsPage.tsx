import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {InnerHero,Policy} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"服务条款",en:"Terms of Service"}} description={{zh:"了解演示范围、内容与使用约定",en:"Understand the demonstration, content, and conditions of use."}}/><Policy locale={locale} kind="terms"/></Shell>}
