import Twitter from "../../../public/twitter.svg"
import Image from "next/image"

type Tweet = {
    user: string,
    info: string
}

type TweetObj = {
    obj: Tweet
}

const ListOfTweets: Tweet[] = [
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2023."
    },
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2022."
    },
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2021."
    },
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2023."
    },
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2022."
    },
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2021."
    },
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2023."
    },
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2022."
    },
    {
        user: "Rust",
        info: "High performance, memory safe coding since February 2021."
    }
]

const IndividualTweet = ({ obj }: TweetObj) => {
    return (
        <div className="min-w-[24em] bg-white p-5 font-subheader rounded-2xl">
            <span className="flex items-center justify-between pb-6">
                <p className="text-gray-600 font-bold text-2xl">@Rust</p>
                <Image className="scale-75" src={Twitter} alt="Twitter" />
            </span>
            <p className="font-medium text-xl">
                {obj.info}
            </p>
        </div>
    )
}

const TweetGroup = () => {
    return (
        <div className="flex gap-x-36">
            {ListOfTweets.map((tweet, i) => (
                <IndividualTweet obj={tweet} />
            ))}
        </div>
    )
}

export const Tweets = () => {
    return (
        <div id="SKILLS" className="flex flex-col items-start px-8 py-12 gap-y-8 overflow-scroll">
            <TweetGroup/>
            <h3 className="font-black text-white font-header text-3xl text-start md:text-center w-full">
               --&gt;&gt;&gt; Scroll for Skills --&gt;&gt;&gt;
            </h3>
            <TweetGroup/>
        </div>
    )
}

export default Tweets