import type {ReactNode} from 'react'
import './globals.css'
export const metadata={title:'Learn.AI · English Speaking Coach',description:'中英双语英语学习前端模板'}
export default function Layout({children}:{children:ReactNode}){return <html lang="zh-CN" data-scroll-behavior="smooth"><body>{children}</body></html>}
