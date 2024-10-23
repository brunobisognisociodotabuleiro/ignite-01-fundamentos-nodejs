import { Readable } from 'node:stream'


class OneToHundredStream extends Readable {
index = 1 

_read() {
      const i = this.index++
      setTimeout(() =>{
        if (i > 100) {

        }else {
          const buf = Buffer.from(String(i))
        }
      }, 1000)
    }
  }

  new OneToHundredStream()
    .pipe(process.stdout)