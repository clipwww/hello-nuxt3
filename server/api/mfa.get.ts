// Generate a new secret
import speakeasy from 'speakeasy'
import qrcode from 'qrcode'
import { sendError, sendStream } from 'h3'

export default defineEventHandler((e) => {
  return new Promise((res, rej) => {
    const secret = speakeasy.generateSecret({ name: 'Hello MFA', length: 20 });    

    if (!secret.otpauth_url) {
      return rej('otpauth_url is empty')
    }
    qrcode.toBuffer(secret.otpauth_url, (err, buffer) => {
      if (err) {
        rej(err)
      }
      
      e.node.res.setHeader('content-type', 'image/png')
      e.node.res.setHeader('content-length', buffer.length)
      res(buffer)
    })
  })
})