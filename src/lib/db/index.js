/**
 * {indexdb储存}
 * @author yutent<yutent.io@gmail.com>
 * @date 2023/05/29 18:33:42
 */

export function getStore(name) {
  let req = window.indexedDB.open(name)
  let _ = defer()

  req.addEventListener('success', ev => {
    _.resolve(ev.target.result)
  })
  req.addEventListener('error', ev => {
    _.reject(ev.target.result.error)
  })
  return _.promise
}
