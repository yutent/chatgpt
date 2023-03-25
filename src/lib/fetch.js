/**
 *
 * @author yutent<yutent.io@gmail.com>
 * @date 2021/03/24 11:50:09
 */
import fetch from 'fetch'

fetch.BASE_URL = localStorage.getItem('BASE_URL')

fetch.inject.request(conf => {
  conf.headers['content-type'] = 'application/json'
  conf.timeout = 60 * 1000
})

fetch.inject.response(res => res.json())

export function post(url, body = {}) {
  return fetch(url, {
    method: 'post',
    body
  })
}
export function get(url, body = {}) {
  return fetch(url, { body })
}

export default fetch
