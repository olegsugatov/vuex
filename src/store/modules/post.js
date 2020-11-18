export default {
    // в cations можем пользоваться асинхронными событиями
    // ctx - context
    actions: {
        async fetchPosts(ctx, limit = 3) {
            const res = await fetch(
            'https://jsonplaceholder.typicode.com/posts?_limit=' + limit
          )
          const posts = await res.json()
          
          ctx.commit('updatePosts', posts)
         }
    },
    // только синхронные методы. State меняется через mutations c помощью мутации
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost){
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        validPosts(state){
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },
        allPosts(state) {
            return state.posts
        },
        // как обратиться одному геттеру к другому
        postsCount(state, getters){
            return getters.validPosts.length
        }
    }
}