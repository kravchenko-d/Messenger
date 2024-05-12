import Chat from "./Chat"
import Message from "./Message"
import User from "./User"

export default class ChatsList {

    constructor(
        private readonly el: HTMLDivElement = document.createElement('div'),
        private list: Chat [] = [],
        private active: Chat | null = null
    ){}

    get element() {
        return this.el
    }

    get activeChat(): Chat | null {

        if(!this.active) {
            return this.list[0]
        }

        return this.active
    }

    set activeChat(val: Chat | null) {
        this.active = val
    }

    set chatsList(val: Chat[]){
        this.list = val
    }

    init(){}
    render(){
        for(let chat of this.list){
            this.el.appendChild(chat.element)
            chat.render()
        }
    }

    mocker(){        
        const users = []

        let ids: number[] = []
        const names = ['Vasya', 'Vadim', 'Ivan', 'Alex', 'Nina']
        for(let i = 0; i < 10; i++){
            let id
            do {
                id = Math.floor(Math.random() * 1000 + 1)
            } while(ids.includes(id))

            const nId = Math.round(Math.random() * (names.length - 1))

            const name = names[nId]
            const login = names[nId].toLowerCase() + Math.floor(Math.random() * 1000 + 10)
            const email = `${login}@mail.ru`
            const user = new User(name, login, email, id)
            users.push(user)
            ids.push(id)
        }

        ids = []
        for(let i = 0; i < 6; i++){
            const sId = Math.floor(Math.random() * (users.length - 1))
            let rId
            do {
                rId = Math.floor(Math.random() * (users.length - 1))
            } while(sId === rId)

            const messages: Message[] = []

            const count = Math.floor((Math.random() * 20 + 5))
            const texts = ['hello, friend', 'yes', 'good', 'cat', 'nice', 'good luck', 'how are you doing']
            
            for(let j = 0; j < count; j++){
               const letters = []
               for(let k = 0; k < 3; k++){
                letters.push(texts[Math.round(Math.random() * (texts.length - 1))])
               }

               let id
               do {
                   id = Math.floor(Math.random() * 1000 + 1)
               } while(ids.includes(id))
                // let longtext = ''
                // for (let x = 0; x < 4; x++){
                //     const tId = Math.floor(Math.random() * (texts.length - 1))
                //     const text = texts[tId]
                //     longtext = longtext + ' ' + text
                // }

                // const text = texts[tId]
                // const longtext = `${texts[tId]} ${texts[Math.floor(Math.random() * (texts.length - 1))]} ${texts[Math.floor(Math.random() * (texts.length - 1))]}`
                //const iId =  j //Math.floor(Math.random() * 1000 + 10)
                const message = new Message(
                    letters.join(' '), // longtext,
                    Math.round(Math.random() * 100) % 2 ? users[sId] : users[rId], //users[sId],
                    null, //this.list[sId],
                    j
                    )
                messages.push(message)
                // debugger
            }
            
            const chat = new Chat(messages, users[sId], users[rId])
            this.list.push(chat)
        }
    }
}