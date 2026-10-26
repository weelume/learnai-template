import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {InnerHero,Policy} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"隐私政策",en:"Privacy"}} description={{zh:"了解数据、语音功能与你的选择",en:"Understand data, speech features, and your choices."}}/><Policy locale={locale} kind="privacy"/></Shell>}
