import type {SiteTemplatePageProps} from '../../../types'
import {Shell} from '../Shell'
import {Article} from '../InnerPages'
export default function Page(props:SiteTemplatePageProps){const locale=props.locale??'zh';return <Shell {...props}><Article locale={locale} basePath={props.basePath} slug="daily-speaking"/></Shell>}
