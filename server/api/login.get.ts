// Generate a new secret
import speakeasy from 'speakeasy'
import { getQuery } from "h3";

export default defineEventHandler((e) => {
  const { secret, token } = getQuery(e);
  const verified = speakeasy.totp.verify({
    secret: `${secret}`,
    encoding: 'base32',
    token: `${token}`
  });

  if (verified) {
    return 'Token is valid'
  } else {
    throw createError({
      statusCode: 403,
      statusMessage: 'Token is invalid',
    })
  }
})

