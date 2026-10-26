import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {InnerHero,Blog} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><InnerHero locale={locale} title={{zh:"学习博客",en:"Blog"}} description={{zh:"用更小的练习 积累更大的表达信心",en:"Small practice sessions build lasting confidence."}}/><Blog locale={locale} basePath={props.basePath}/></Shell>}
