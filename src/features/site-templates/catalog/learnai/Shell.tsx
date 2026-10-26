'use client'
import Link from 'next/link'
import {usePathname,useRouter} from 'next/navigation'
import {AnimatePresence,MotionConfig,motion} from 'framer-motion'
import {useState,type ReactNode} from 'react'
import {asset,nav,type Locale} from './data'
import {useLearnaiHost} from './host'
import {languageHref} from './routing'
import {Reveal} from './Motion'
import './theme.css'
export const href=(base:string,slug='')=>(base+'/'+slug).replace(/\/$/,'')||'/'
export function Shell({children,locale='zh',basePath,home=false}:{children:ReactNode;locale?:Locale;basePath:string;home?:boolean}){
 const host=useLearnaiHost(),pathname=usePathname(),router=useRouter(),[menu,setMenu]=useState(false)
 const root=locale==='en'?basePath.replace(/\/en$/,''):basePath
 const switchHref=languageHref(pathname||basePath,basePath,locale,'','')
 return <MotionConfig reducedMotion="user"><div className={'la-root '+(home?'la-home':'')} lang={locale==='zh'?'zh-CN':'en'}>
  <a className="la-skip" href="#la-main">{locale==='zh'?'跳转到内容':'Skip to content'}</a>
  <header className="la-header"><nav aria-label={locale==='zh'?'主导航':'Main navigation'}>
   <Link href={href(basePath)} className="la-brand">{host.logo&&<img src={host.logo} alt="" width="24" height="24"/>}<span>{host.brandName[locale]}</span></Link>
   <div className="la-nav">{nav.slice(0,3).map(n=><Link key={n.slug} href={href(basePath,n.slug)}>{n.label[locale]}</Link>)}<button className="la-download" type="button">{locale==='zh'?'下载应用':'Download App'}</button></div>
   <div className="la-nav-actions"><Link className="la-language" href={switchHref} onClick={e=>{e.preventDefault();setMenu(false);router.push(languageHref(window.location.pathname,basePath,locale,window.location.search,window.location.hash))}}>{locale==='zh'?'EN':'中文'}</Link><Link href={href(basePath,'contact')} className="la-button la-join">{locale==='zh'?'免费加入':'Join for free'}</Link><button className="la-menu-toggle" aria-label={locale==='zh'?'切换菜单':'Toggle menu'} aria-controls="la-mobile-menu" aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?'×':'☰'}</button></div>
  </nav><AnimatePresence>{menu&&<motion.div className="la-mobile-menu" id="la-mobile-menu" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.3}}>{nav.map(n=><Link key={n.slug} href={href(basePath,n.slug)} onClick={()=>setMenu(false)}>{n.label[locale]}</Link>)}<button onClick={()=>setMenu(false)}>{locale==='zh'?'下载应用':'Download App'}</button></motion.div>}</AnimatePresence></header>
  <main id="la-main">{children}</main>
  <footer className="la-footer"><div className="la-footer-top"><Link href={href(basePath,'practice')} className="la-button">{locale==='zh'?'测测我的英语水平':'Test my English level'}</Link></div>
   <div className="la-footer-grid"><Reveal y={35} spring><Link href={href(basePath)} className="la-brand">{(host.lightLogo||host.logo)&&<img src={host.lightLogo||host.logo} alt="" width="24" height="24"/>}{host.brandName[locale]}</Link><p>{locale==='zh'?'让每一次开口 更接近自信表达':'More confidence in every conversation.'}</p><small>{locale==='zh'?'英语学习前端演示':'English learning frontend demo'}</small></Reveal>
   {[[['features','产品功能','Features'],['how-it-works','如何开始','How it works'],['practice','情境练习','Practice'],['pricing','价格方案','Pricing']],[['blog','学习博客','Blog'],['about','关于我们','About'],['contact','联系我们','Contact']],[['terms','服务条款','Terms of Service'],['privacy','隐私政策','Privacy'],['acceptable-use','使用规范','Acceptable Use'],['cookies','Cookie 设置','Cookie Settings']]].map((group,index)=><Reveal key={index} y={35} spring delay={(index+1)*.05}><h4>{(locale==='zh'?['开始学习','了解更多','法律与隐私']:['LEARN','RESOURCES','LEGAL'])[index]}</h4>{group.map(([slug,zh,en])=><Link key={slug} href={href(basePath,slug)}>{locale==='zh'?zh:en}</Link>)}</Reveal>)}</div>
   <div className="la-footer-bottom"><span>© 2026 {host.brandName[locale]}</span>{host.filing}{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}</div>
  </footer>
  {host.marketplaceHref&&<Link className="la-market" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{(host.lightLogo||host.logo)&&<img src={host.lightLogo||host.logo} alt="" width="24" height="24"/>}<span>{host.brandName[locale]}</span></Link>}
  {!home&&<Link className="la-home-link" href={href(root+(locale==='en'?'/en':''))}>{locale==='zh'?'返回首页':'Home'}</Link>}
 </div></MotionConfig>
}
export function Trust({locale}:{locale:Locale}){return <div className="la-trust"><span className="la-avatars">{[1,2,3,4].map(n=><img key={n} src={asset('avatar-'+n+'.jpg')} alt="" width="24" height="24"/>)}</span><span><strong>20K+</strong> {locale==='zh'?'10,560+ 用户的信赖':'Trusted by 10,560+ users'}</span><span className="la-stars" aria-label="4.98 / 5">★★★★★</span></div>}
