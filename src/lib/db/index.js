/**
 * {indexdb储存}
 * @author yutent<yutent.io@gmail.com>
 * @date 2023/05/29 18:33:42
 */

export function createStore(name, version = 1) {
  let req = window.indexedDB.open(name, version)
  let _ = defer()

  req.addEventListener('upgradeneeded', ev => {
    _.resolve(ev.target.result)
  })
  req.addEventListener('error', ev => {
    _.reject(ev.target.result.error)
  })
  return _.promise
}

export function deleteStore(name) {
  let req = window.indexedDB.deleteDatabase(name)
  let _ = defer()

  req.addEventListener('success', ev => {
    _.resolve()
  })
  req.addEventListener('error', ev => {
    _.reject(ev.target.result.error)
  })
  return _.promise
}

export function createTable(db, { name, config }) {
  var opt = {}
  var table
  if (config.primaryKey) {
    opt.keyPath = config.primaryKey
  }
  if (config.autoIncrement) {
    opt.autoIncrement = config.autoIncrement
  }

  table = db.createObjectStore(name, opt)

  if (config.indexes && config.indexes.length) {
    for (let it of config.indexes) {
      table.createIndex(it + '_idx', it)
    }
  }
}

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
