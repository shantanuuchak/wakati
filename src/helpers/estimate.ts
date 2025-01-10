// import rs from 'text-readability';

// function estimate(text: string) {
//     const o = rs.syllableCount(text)
//     console.log(o)
// }
import * as cheerio from 'cheerio';

async function estimate(text: string) {
    const res = await fetch(text);
    const data = await res.text();
    const title = (cheerio.load(data)('title').text())
    return title
}

export default estimate