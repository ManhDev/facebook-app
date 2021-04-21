import { Profile } from './profile';
export interface Comment {
    id: Number,
    createAt: String,
    updateAt: String,
    body: String,
    author: Profile
}