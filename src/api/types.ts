export interface Post {
    id: number
    createdAt: number
    imgSrc: string
    description: string
    likesCount: number
    isLiked: boolean
    commentsCount: number
    userId: number
    comments: Comment[]
}

export interface User {
    id: number
    username: string
    avatarUrl: string
}

export interface Comment {
    id: number
    createdAt: number
    text: string
    likesCount?: number
    isLiked?: boolean
    userId: number
}
