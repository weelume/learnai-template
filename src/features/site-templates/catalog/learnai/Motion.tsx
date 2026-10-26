'use client'
import {motion,useReducedMotion,type MotionProps} from 'framer-motion'
import {useEffect,useRef,type ReactNode} from 'react'
export function Reveal({children,className='',x=0,y=40,delay=0,duration=.6,spring=false,...rest}:{children:ReactNode;className?:string;x?:number;y?:number;delay?:number;duration?:number;spring?:boolean}&MotionProps){
 const reduced=useReducedMotion()
 return <motion.div className={className} initial={reduced?false:{opacity:0,x,y}} whileInView={{opacity:1,x:0,y:0}} viewport={{once:true,amount:.15}} transition={spring?{type:'spring',stiffness:80,damping:15,delay:reduced?0:delay}:{duration:reduced?0:duration,delay:reduced?0:delay,ease:'easeOut'}} {...rest}>{children}</motion.div>
}
export function Modal({children,label,onClose}:{children:ReactNode;label:string;onClose:()=>void}){
 const ref=useRef<HTMLDivElement>(null),close=useRef(onClose)
 useEffect(()=>{close.current=onClose},[onClose])
 useEffect(()=>{
  const origin=document.activeElement instanceof HTMLElement?document.activeElement:null,overflow=document.body.style.overflow
  document.body.style.overflow='hidden'
  const panel=ref.current;panel?.focus()
  const key=(event:KeyboardEvent)=>{
   if(event.key==='Escape'){event.preventDefault();close.current();return}
   if(event.key!=='Tab'||!panel)return
   const nodes=Array.from(panel.querySelectorAll<HTMLElement>('button:not([disabled]),a[href],input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex="0"]')).filter(e=>e.getClientRects().length>0)
   const first=nodes[0],last=nodes.at(-1)
   if(!first){event.preventDefault();panel.focus()}
   else if(event.shiftKey&&(document.activeElement===first||document.activeElement===panel)){event.preventDefault();last?.focus()}
   else if(!event.shiftKey&&(document.activeElement===last||document.activeElement===panel)){event.preventDefault();first.focus()}
  }
  document.addEventListener('keydown',key)
  return()=>{document.body.style.overflow=overflow;document.removeEventListener('keydown',key);origin?.focus()}
 },[])
 return <div className="la-backdrop" onClick={onClose}><motion.div ref={ref} role="dialog" aria-modal="true" aria-label={label} tabIndex={-1} className="la-drawer" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type:'spring',damping:25,stiffness:200}} onClick={e=>e.stopPropagation()}>{children}</motion.div></div>
}
export function debug(event:string,context:Record<string,string|number|boolean>={}){console.debug('[learnai]',{event,...context})}

export function MotionGroup({children,className='',stagger=.08}:{children:ReactNode;className?:string;stagger?:number}){const reduced=useReducedMotion();return <motion.div className={className} variants={{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:reduced?0:stagger}}}} initial={reduced?false:'hidden'} whileInView="visible" viewport={{once:true,amount:.15}}>{children}</motion.div>}
export function MotionItem({children,className='',y=40,scale=1,stiffness=80,damping=15}:{children:ReactNode;className?:string;y?:number;scale?:number;stiffness?:number;damping?:number}){const reduced=useReducedMotion();return <motion.div className={className} variants={{hidden:{opacity:0,y:reduced?0:y,scale:reduced?1:scale},visible:{opacity:1,y:0,scale:1,transition:{type:'spring',stiffness,damping}}}}>{children}</motion.div>}
export function Microphone(){return <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8"/></svg>}
