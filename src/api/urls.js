const BASE_URL = "http://localhost:3000"
export default {
    users: {
        register: `${BASE_URL}/users/register`,
        login: `${BASE_URL}/users/login`,
        update: `${BASE_URL}/users`,
        getUserData: `${BASE_URL}/users`
    },
    todos: {
        todos: `${BASE_URL}/todos`
    },
    projects: {
        projects: `${BASE_URL}/projects`,
        column: `${BASE_URL}/projects/column`,
        notes: `${BASE_URL}/projects/note`,
        comment: `${BASE_URL}/projects/note/comment`
    }
}
