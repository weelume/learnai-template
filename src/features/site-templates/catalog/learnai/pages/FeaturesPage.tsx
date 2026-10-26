import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {FeatureGrid,Integrations,FAQ} from '../Sections'
import {InnerHero} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"产品功能",en:"Features"}} description={{zh:"从学习路径到对话反馈，每一步都围绕真实表达。",en:"From learning paths to conversation feedback, every step focuses on real communication."}}/><FeatureGrid locale={locale}/><Integrations locale={locale}/><FAQ locale={locale}/></Shell>}
