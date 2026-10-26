import {test} from 'node:test'
import assert from 'node:assert/strict'
import {languageHref} from '../src/features/site-templates/catalog/learnai/routing.ts'
test('独立与宿主语言切换保留内页、查询和锚点',()=>{
assert.equal(languageHref('/blog/interview','','zh','?topic=work','#goal'),'/en/blog/interview?topic=work#goal')
assert.equal(languageHref('/en/blog/interview','/en','en','topic=work','#goal'),'/blog/interview?topic=work#goal')
assert.equal(languageHref('/templates/learnai/site/contact','/templates/learnai/site','zh','q=1','#form'),'/templates/learnai/site/en/contact?q=1#form')
assert.equal(languageHref('/templates/learnai/site/en','/templates/learnai/site/en','en','',''),'/templates/learnai/site')
assert.equal(languageHref('/','','zh','',''),'/en')
})
