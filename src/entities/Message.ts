import Chat from "./Chat";
import User from "./User";
import { Utils } from "../utils/utils";

export default class Message {
    constructor(
        private _text: string = "",
        private _author: User | null = null,
        private chat: Chat | null = null,
        private id: number = -1,
        private _isRead: boolean = false,
        public readonly element = document.createElement("div"),
        private readonly date: Date = new Date(2023, 8, 9, 8, 15)
    ){
        this.element.classList.add("message")
    }

    get author() {
        return this._author
    }

    get text() {
        return this._text
    }

    get isRead() {
        return this._isRead
    }

    render(){
        // this.element.innerText = ""
        // this.element.classList.remove("left")
        // this.element.classList.remove("right")

        if(this.element.children.length === 0){
            const text = document.createElement("div")
            const date = document.createElement("div")

            text.innerText = this._text
            let hours = this.date.getHours()
            let minutes = this.date.getMinutes()

            function doubleDigit (num: number) {
                if (num.toString().length > 1) {
                    return num
                }
                else {
                    return `0${num}`
                }
            }

            date.innerText = `${doubleDigit(hours)}:${doubleDigit(minutes)}`
            // date.innerText = `${Utils.itoa(hours)}:${Utils.itoa(minutes)}`
            // date.innerText = `${this.date.getHours()}:${this.date.getMinutes()}`

            text.classList.add("text")
            date.classList.add("date")

            this.element.classList.add(Math.round(Math.random() * 100) % 2 ? "right" : "left")

            this.element.appendChild(text)
            this.element.appendChild(date)   
        }


    }
}