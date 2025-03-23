import { memo } from 'react'

/**
 * 如果props是引用类型，且props在父组件的useState中
 * 1. 当父组件的其他数据发生变化时，props的引用地址不变，子组件不会重新渲染
 * 2. 当父组件的phone数据发生变化时，props的引用地址发生变化，子组件会重新渲染
 */
const MemoPhone = memo(function Phone({ phone }) {
  console.log('phone组件渲染了')
  return (
    <div>
      <p>手机的品牌是：{phone.name}</p>
      <p>手机的型号是：{phone.type}</p>
    </div>
  )
})

export default MemoPhone;
