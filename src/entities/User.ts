export default class User {
    constructor(
        private _name: string = "",
        private login: string = "",
        private email: string = "",
        private id: number = -1,
        private _avatar: string = ""
    ){}

    get fullName(){
        return this._name
    }

    get avatar() {
        return this._avatar
    }

    signIn(): boolean {
        return false
    }
    signUp(): boolean {
        return false
    }
    logOut(): boolean {
        return false
    }

    render(){}
}