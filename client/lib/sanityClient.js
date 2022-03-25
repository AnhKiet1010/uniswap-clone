import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'kuufb8zh',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skVbCkq42MQSZ5863rB6PfNQoi1SMttg7gBPaJv3y4NLcsvtoPbgi5mnpPtXgB6DSnwE5tPZswRhnYCs2apeWQ1e220fxb6q0Yy53HWMtH8Ob4TOINzFbI1E5EeyQZiUXbBMBfhhQCYGLSDbhMwJuVViDRrPe7FtcR0qelc646dHi3ATtmOl',
  useCdn: false,
})