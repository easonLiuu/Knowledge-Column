import { h, render } from 'vue'
import Message from './Message.vue'
export type MessageType = 'success' | 'error' | 'default'

const createMessage = (message: string | '', type: MessageType, timeout?: number) => {
  const messageVNode = h(Message, {
    message,
    type
  })
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  render(messageVNode, mountNode)
  const destroy = () => {
    render(null, mountNode)
    document.body.removeChild(mountNode)
  }
  if (timeout) {
    setTimeout(() => {
      destroy()
    }, timeout)
  }
  return {
    destroy
  }
}
export default createMessage
