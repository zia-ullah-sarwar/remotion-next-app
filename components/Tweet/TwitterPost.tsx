// import { ReactNode, useRef } from "react";
// import ReactMarkdown from "react-markdown";
import mainStyles from "./twitter-post.module.css"
import sampleStyles from "./twitter-sample-post.module.css"

export default function TwitterPost({
    name, handle, message, avatar, image, sample = false, sizeRef
}: {
    name: string;
    handle: string;
    message: string;
    avatar: string;
    image: string;
    sample?: boolean;
    sizeRef?: any;
}) {
    const styles = sample ? sampleStyles : mainStyles;

    return (
        <div ref={sizeRef} className={`${styles["twitter-post"]} ${styles["light-mode"]}`}>
            <div className={styles["twitter-header"]}>
                <img src={avatar} alt="Avatar" className={styles["twitter-avatar"]} />
                <div>
                    <div className={styles["twitter-name"]}>{name}</div>
                    <div className={styles["twitter-username"]}>@{handle}</div>
                </div>
            </div>
            <div className={styles["twitter-content"]}>
                {message}
                <img src={image} alt="Post Image" className={styles["twitter-image"]} />
            </div>
        </div>
    );
}
