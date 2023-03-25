/**
 * {}
 * @author yutent<yutent.io@gmail.com>
 * @date 2023/03/20 18:02:01
 */
import { html, css, Component, nextTick } from '@bd/core'

class Code extends Component {
  static props = {
    code: { type: String, default: '', attribute: false },
    lang: ''
  }

  static styles = [
    css`
      :host {
        display: flex;
        border-radius: 3px;
      }
      .code-box {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        margin: 10px 0;
        border-radius: 3px;
        background: #f7f8fb;
        color: var(--color-dark-1);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
      }

      .title {
        flex-shrink: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 32px;
        padding: 0 12px;
        line-height: 1;
        font-size: 14px;
        user-select: none;
      }

      .title section {
        display: flex;
        align-items: center;
      }

      .title i {
        display: block;
        width: 12px;
        height: 12px;
        margin-right: 6px;
        border-radius: 50%;
        background: var(--color-red-1);
      }

      .title i:nth-child(2) {
        background: var(--color-orange-1);
      }
      .title i:nth-child(3) {
        background: var(--color-green-1);
      }
    `,
    css`
      .code-block {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        overflow-y: auto;
        line-height: 20px;
        font-size: 14px;
        color: var(--color-dark-1);
        cursor: text;
        counter-reset: code;
      }
      .code-block code {
        display: block;
        position: relative;
        min-height: 20px;
        padding: 0 8px 0 45px;
        font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
        white-space: pre-wrap;
        word-break: break-word;
      }
      .code-block code::before {
        position: absolute;
        left: 0;
        width: 40px;
        height: 100%;
        padding-right: 5px;
        text-align: right;
        color: var(--color-grey-1);
        content: counter(code);
        counter-increment: code;
      }
    `
  ]

  mounted() {
    var txt = this.innerHTML || this.textContent
    txt = txt.trim().replace(/^[\r\n]|\s{2,}$/g, '')
    if (txt.startsWith('<xmp>') && txt.endsWith('</xmp>')) {
      txt = txt.slice(5, -6).trim()
    }
    if (txt) {
      this.textContent = ''
      nextTick(_ => {
        this.code = txt.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      })
    }
  }

  render() {
    return html`
      <div class="code-box">
        <header class="title">
          <section><i></i><i></i><i></i></section>
          <section>${this.lang}</section>
        </header>
        <div class="code-block">
          ${this.code.split('\n').map(s => html`<code>${s}</code>`)}
        </div>
      </div>
    `
  }
}

Code.reg('code')
