export interface PostModel {
    question: string;
    user: string;
    timeStamp: Date;
    likes: number;
    comments: Array<comment> // Comments from other users
    responses: Array<string>; // Responses to the question
}

interface comment {
    user: string;
    comment: string;
    likes: string;
}
