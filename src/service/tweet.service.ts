import TweetModel from '../models/tweet.sessio'

export const createNewTweet = await (tweet: Object, user: Object) => {
    try{
        tweet.user = user
        const newTweet = await TweetModel.create(tweet)
    }catch(e:any){
        throw e
    }
} 