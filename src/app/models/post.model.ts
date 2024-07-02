export class Post {
    constructor() {
        this.title='';
        this.body = '';
        this.views = 0;
        this.userId = 0;
    }
    id!: number
    title: string
    body: string
    views: number
    userId: number
    reactions?: Reactions
}

export class PostGeneric {
    posts!: Post[]
    total!: number
}

export class Reactions {
    likes!: number
    dislikes!: number
}