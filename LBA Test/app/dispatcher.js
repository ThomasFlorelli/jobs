const uuid = require("uuid/v1")

let listeners = {}

function dispatch (payload) {
    for (let id in listeners) {
        listeners[id](payload)
    }
}

function register (cb) {
    const id = uuid
    listeners[id] = cb
}

module.exports = {
    register: register,
    dispatch: dispatch
}
