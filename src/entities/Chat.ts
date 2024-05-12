import Message from "./Message"
import User from "./User"

export default class Chat {

    constructor(
        private messages: Message[] = [], // Array<Message> === Message[]
        private sender: User | null = null,
        private recipient: User | null = null,
        private isActive: boolean = false,
        private readonly el: HTMLDivElement = document.createElement('div')
    ){}
    
    get messageList(){
        return this.messages
    }
    
    get element(){
        return this.el
    }

    set active(val: boolean) {
        this.isActive = val
    }

    addMessage(mes: Message){
        this.messages.push(mes)
    }

    init(){}
    render(){
        this.el.classList.add('cut-chat')

        const avatar = document.createElement('div')
        const info = document.createElement('div')
        const date = document.createElement('div')

        avatar.classList.add('avatar')

        const lastMessage = this.messages[this.messages.length - 1]

        // info.innerHTML = (this.recipient?.fullName || "no name") + "</br>"  + lastMessage.text
        info.innerHTML = `<span>${(this.recipient?.fullName || "no name")}</span><span>${lastMessage.text}</span>`
        date.innerText = "00:00"

        const img = document.createElement('img')
        img.src = this.sender?.avatar || "https://i2.wp.com/vdostavka.ru/wp-content/uploads/2019/05/no-avatar.png"
        img.alt = ""

        avatar.appendChild(img)

        // debugger

        this.el.appendChild(avatar)
        this.el.appendChild(info)
        this.el.appendChild(date)


    }
    send(){}
}