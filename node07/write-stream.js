const fs = require('fs')
const file = 'Video.mp4'

const readStream = fs.createReadStream(file)
const writeStream = fs.createWriteStream('NewVideo.mp4')

readStream.pipe(writeStream)

writeStream.on('finish', ()=>{
  console.log('New file has been created....')
})