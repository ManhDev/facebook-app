import { Profile } from './profile';
export interface Article {
    slug: String,
    title: String,
    description: String,
    body: String,
    tagList: String[],
    createAt: String,
    updateAt: String,
    favorited: Boolean,
    favoritesCount: Number,
    author: Profile
}