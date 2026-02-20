const matter = require('gray-matter');
const markDownIt=require("markdown-it");

const obj = matter.read(__dirname+'/sample.md');
console.log(obj);

const md=markDownIt({html:true}); // html:true allows for adding html to your markdown files
const html=md.render(obj.content);
console.log(html);
