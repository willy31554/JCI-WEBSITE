import { useEffect, useRef, useState } from 'react'

const cannedResponses = [
  'Hi! How can I assist you today?',
  'Thanks for reaching out. One moment while I check that for you.',
  'Our next intake begins soon — would you like details?',
  'Please provide your admission number and I can help you track it.',
]

export default function LiveChat() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState([
    { id: 1, sender: 'system', text: 'Welcome! Ask us anything about programmes, admissions, or events.' },
  ])
  const [agentTyping, setAgentTyping] = useState(false)
  const messageListRef = useRef(null)

  useEffect(() => {
    if (!open || !messageListRef.current) return
    const lastMessage = messageListRef.current.lastElementChild
    if (lastMessage) {
      lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
  }, [messages, open])

  function sendMessage(event) {
    event.preventDefault()
    const content = draft.trim()
    if (!content) return

    const userMessage = { id: Date.now(), sender: 'user', text: content }
    setMessages((prev) => [...prev, userMessage])
    setDraft('')
    setAgentTyping(true)

    setTimeout(() => {
      const response = cannedResponses[Math.floor(Math.random() * cannedResponses.length)]
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'agent', text: response }])
      setAgentTyping(false)
    }, 1200)
  }

  return (
    <div className={open ? 'chat-widget open' : 'chat-widget'}>
      <button className="chat-toggle" onClick={() => setOpen((current) => !current)}>
        {open ? 'Close Chat' : 'Live Chat'}
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div>
              <strong>Live Chat</strong>
              <p>Connect with support in real time.</p>
            </div>
          </div>

          <div className="chat-messages" ref={messageListRef}>
            {messages.map((message) => (
              <div key={message.id} className={`chat-message ${message.sender}`}>
                <div className="chat-bubble">{message.text}</div>
              </div>
            ))}
            {agentTyping && (
              <div className="chat-message agent">
                <div className="chat-bubble typing">Typing...</div>
              </div>
            )}
          </div>

          <form className="chat-input-row" onSubmit={sendMessage}>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Type your question..."
              aria-label="Chat message"
            />
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      )}
    </div>
  )
}
