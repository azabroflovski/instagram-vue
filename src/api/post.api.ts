import type { Comment, Post } from '@/api/types'

const posts: Post[] = []

export class PostApi {
  /**
     * This function returns all posts from database
     */
  getFeed(): Post[] {
    return posts
  }

  /**
     * This function can add a post to database
     * @param post
     */
  addPost(post: Post): void {
    posts.push(post)
  }

  /**
     * You can find post by postId
     * @param id - postId
     */
  findPost(id: number): Post | undefined {
    return posts.find(item => item.id === id)
  }

  /**
     * You can find comment in posts comment
     * @param comments
     * @param commentId
     */
  findComment(comments: Comment[], commentId: number): Comment | undefined {
    return comments.find(item => item.id === commentId)
  }

  /**
     * This function returns comment index from post comments
     * @param comments
     * @param commentId
     */
  findCommentIndex(comments: Comment[], commentId: number): number {
    return comments.findIndex(item => item.id === commentId)
  }

  /**
     * Like post and increase likes count
     * @param postId
     */
  like(postId: number): Post | undefined {
    const post = this.findPost(postId)

    if (post) {
      if (!post.isLiked) {
        post.likesCount++
        post.isLiked = true
      }

      return post
    }
  }

  /**
     * Unlike post and decrease likes count
     * @param postId
     */
  unLike(postId: number): Post | undefined {
    const post = this.findPost(postId)

    if (post) {
      if (post.isLiked) {
        post.likesCount--
        post.isLiked = false

        return post
      }
    }
  }

  /**
     * Add comment to post by id
     * @param postId
     * @param comment
     */
  comment(postId: number, comment: Comment): Comment | undefined {
    const post = this.findPost(postId)

    if (post) {
      post.comments.push(comment)

      return comment
    }
  }

  /**
     * Delete comment from post by id
     * @param postId
     * @param commentId
     */
  removeComment(postId: number, commentId: number): void {
    const post = this.findPost(postId)

    if (post) {
      const commentIndex = this.findCommentIndex(post.comments, commentId)

      if (commentIndex)
        post.comments.splice(commentIndex, 1)
    }
  }
}

export const postApi = new PostApi()
