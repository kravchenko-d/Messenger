import ChatsList from "./ChatsList"
import Message from "./Message"

export default class Messenger {
    constructor(
        private readonly appElement: HTMLElement | null,
        private readonly chatsList = new ChatsList(),
        private readonly chatElement = document.createElement('div')
    ){
        if(!appElement){
            this.appElement = document.createElement('div')
        }
        this.init()
    }

    private init(){
        //style
        this.appElement?.classList.add("messenger")
        this.chatsList.element.classList.add("chat-list")
        this.chatElement.classList.add("chat")

        //mount
        this.appElement?.appendChild(this.chatsList.element)
        this.appElement?.appendChild(this.chatElement)

        //mock
        this.chatsList.mocker()
        
        this.render()
    }

    // showMessage(){
    //     const messages = document.createElement('div')
    //     this.chatElement.appendChild(messages)
    //     messages.innerHTML = this.chatsList
    // }

    render(){
        this.chatsList.render()
        this.renderChat()
        // this.showMessage() // для вывода сообщений
    }

    private renderChat() {
        const chat = this.chatsList.activeChat
        const messages = chat?.messageList ?? []

        const form = document.createElement("form")
        const textarea = document.createElement("textarea")
        const send = document.createElement("button")
        send.innerText = 'Send'
        send.type = 'button' // type - 'sumbit' (default), 'reset', 'button'

        send.addEventListener('click', event => {
            const msg = textarea.value
            const newmsg = new Message (
                msg,
                null,
                null,
                0,
                true
            )
            this.chatsList?.activeChat?.addMessage(newmsg)
            console.log(this.chatsList.activeChat)

            listMessages.innerHTML = ''
            for(let message of messages){
                message.render()
                listMessages.appendChild(message.element)
                // listMessages.scrollTop += message.element.clientHeight + 8
            }
            listMessages.scrollTop = listMessages.scrollHeight
            // debugger

            textarea.value = ''
        })

        form.appendChild(textarea)
        form.appendChild(send)

        const listMessages = document.createElement("div")

        listMessages.addEventListener('scroll', event => {
            console.log('listMessages => scroll', event.currentTarget, (event.currentTarget as HTMLDivElement).scrollTop)
        })

        for(let message of messages){
            message.render()
            listMessages.appendChild(message.element)
        }

        // debugger

        // listMessages.scrollTop = listMessages.scrollHeight

        this.chatElement.appendChild(listMessages)
        this.chatElement.appendChild(form)

        listMessages.scrollTop = listMessages.scrollHeight
    }
}