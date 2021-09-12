


interface SetUser{
    type: 'set-user',
    payload?: string
}
interface UserLogout{
    type: 'user-logout'
}

export type userActions = SetUser | UserLogout