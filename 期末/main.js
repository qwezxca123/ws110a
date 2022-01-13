import { serve } from "https://deno.land/std@0.60.0/http/server.ts"
const s = serve({ port: 8533 })
console.log("http://localhost:8533/fin.html")
for await (const req of s) {
  console.log('req.url=', req.url)
  try {
    const text = await Deno.readTextFile('./fin'+req.url); // ./public/index.html
    req.respond({ body: text })
  } catch (error) {
    console.log('error=', error)
    req.respond({ status:404 })
  }
}