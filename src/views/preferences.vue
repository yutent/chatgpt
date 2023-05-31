<template>
  <wc-tabs class="preferences" type="card" :tab="tab">
    <wc-tab>
      <span slot="label"> 常规<wc-icon name="home"></wc-icon> </span>
      <div class="form">
        <wc-space>
          <span class="label">接口域名: </span>
          <wc-input placeholder="baseUrl" v-model="$store.gpt.baseUrl" />
        </wc-space>
        <wc-space>
          <span class="label">APIKEY: </span>
          <wc-input
            placeholder="填写你自己的apikey"
            v-model="$store.gpt.apiKey"
          />
        </wc-space>
        <wc-space>
          <span class="label">模型: </span>
          <wc-select>
            <wc-option></wc-option>
          </wc-select>
        </wc-space>
      </div>
    </wc-tab>

    <wc-tab>
      <span slot="label"> 模型调整<wc-icon name="option"></wc-icon> </span>
      <div class="form">
        <wc-space>
          <span class="label">temperature: </span>
          <wc-slider
            :step="0.01"
            :max="2"
            :min="0"
            v-model="$store.gpt.temperature"
          />
        </wc-space>
        <wc-space>
          <span class="label">top_p: </span>
          <wc-slider
            :step="0.01"
            :max="1"
            :min="0"
            v-model="$store.gpt.top_p"
          />
        </wc-space>
        <wc-space>
          <span class="label">presence_penalty: </span>
          <wc-slider
            :step="0.01"
            :max="2"
            :min="-2"
            v-model="$store.gpt.presence_penalty"
          />
        </wc-space>
        <wc-space>
          <span class="label">frequency_penalty: </span>
          <wc-slider
            :step="0.01"
            :max="2"
            :min="-2"
            v-model="$store.gpt.frequency_penalty"
          />
        </wc-space>
      </div>
    </wc-tab>

    <wc-tab>
      <span slot="label"> 关于<wc-icon name="info"></wc-icon> </span>
      <div class="about">
        <p>
          本项目为免费开源项目, 并不提供chatgpt的apiKey,
          需要你自己注册申请自己的apiKey方可使用。我们不提供任何关于注册,申请账号的服务。
        </p>
        <p>
          本项目没有自己服务端, 所以不需要注册, 也不需要登录,
          更不会保存你的任何信息, 你的一切操作,以及产生的数据, 全是在本地储存。
          所以, 当你清除本地缓存, 或更换浏览器, 或更换电脑时,
          一切数据都将不复存在。
        </p>
        <p>
          使用本项目时, 请遵循所在地区/国家的相关法律法规, 由此产生的一切问题,
          与作者本人无关。
        </p>
        <p>你使用本项目时, 即默认你已知晓并同意以上说明。</p>
      </div>
    </wc-tab>
  </wc-tabs>
</template>

<script>
export default {
  data() {
    return {
      tab: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.preferences {
  width: 640px;
  height: 480px;
  border-radius: 3px;

  .form {
    padding: 32px;

    .label {
      width: 80px;
    }
  }

  .about {
    padding: 32px;

    p {
      margin-bottom: 16px;
      text-indent: 2em;
    }
  }

  wc-space {
    wc-input {
      flex: 1;
    }
  }
}
</style>
