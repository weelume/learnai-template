import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {InnerHero,Pricing} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"价格方案",en:"Pricing"}} description={{zh:"找到适合自己节奏的练习方式，价格为模板示例。",en:"Find a practice rhythm that suits you. Prices are template examples."}}/><Pricing locale={locale}/></Shell>}
