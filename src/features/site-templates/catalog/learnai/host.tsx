'use client'
import {createContext,useContext,type ReactNode} from 'react'
export type Bilingual={zh:string;en:string}
export interface LearnaiHostConfig {brandName:Bilingual;logo?:string;lightLogo?:string;marketplaceHref?:string;marketplaceLabel?:Bilingual;marketplaceAriaLabel?:Bilingual;filing?:ReactNode}
const Context=createContext<LearnaiHostConfig>({brandName:{zh:'Learn.AI',en:'Learn.AI'},logo:'/templates/learnai/images/mark.svg'})
export function LearnaiHostProvider({children,...config}:LearnaiHostConfig&{children:ReactNode}){return <Context.Provider value={config}>{children}</Context.Provider>}
export const useLearnaiHost=()=>useContext(Context)
