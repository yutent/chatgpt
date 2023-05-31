/**
 * {}
 * @author yutent<yutent.io@gmail.com>
 * @date 2023/05/31 10:27:01
 */

export default {
  tables: [
    /**
     * @column id   {String} 设置项
     * @column value  {String} 设置项的值
     */
    { name: 'preferences', primaryKey: 'id' },
    /**
     * @column id   {String} 会话ID
     * @column name   {String} 会话名称
     */
    { name: 'conversations', primaryKey: 'id' },
    /**
     * @column id     {String} 记录ID
     * @column conversation        {String} 所属会话ID
     * @column role         {String}  角色, system/user/assistant
     * @column content         {String} 消息内容
     */
    { name: 'records', primaryKey: 'id', indexes: ['conversation'] }
  ]
}
