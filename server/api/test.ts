
export default defineEventHandler((e) => {
  console.log(e.node.req.method)
  return 'Test get handler'
})