import open, {openApp, apps} from 'open';

const query='tom scott'
const processedquery=query.replace(/ /g,'+')
const givenurl='https://gogoanimehd.io/search.html?keyword='+processedquery

await open(givenurl, {app: {name: 'firefox'}});
