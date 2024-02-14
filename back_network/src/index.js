// import app from "./app.js"
// const PORT = 3000

// app.listen(PORT)
// console.log('server run on port:' + PORT)

import PCAPNGParser from 'pcap-ng-parser'
const pcapNgParser = new PCAPNGParser()
import { createReadStream } from 'fs'
