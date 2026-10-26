/** 同时用于独立站与宿主，语言切换保留页面、查询参数和锚点。 */
export function languageHref(pathname:string,basePath:string,locale:'zh'|'en',search:string,hash:string):string {
 const root=locale==='en'?basePath.replace(/\/en$/,''):basePath
 const suffix=basePath?pathname.slice(basePath.length):pathname
 const target=(locale==='en'?root:root+'/en')+'/'+suffix.replace(/^\//,'')
 return (target.replace(/\/$/,'')||'/')+(search?'?'+search.replace(/^\?/,''):'')+hash
}
