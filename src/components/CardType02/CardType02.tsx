import styles from "./cardType02.module.css";
import icoStar from "@/assets/ico/star.png";
import Image from "next/image";
export interface CardType01Props {
    id: number;
    category: string;
    title: string;
    content: string;
    userInfo: string;
}
const CardType02: React.FC<CardType01Props> = ({category, title, content, userInfo, ...props}) => {
    return (
        <div className={styles.cardItem}>
            <p className={`txt-small ${styles.category}`}>{category}</p>
            <p className={`txt-normal ${styles.title}`}>{title}</p>
            <p className={`txt-normal ${styles.content}`}>{content}</p>
            <p className={`txt-normal ${styles.userInfo}`}>
                <span>{userInfo}</span>님의 이용후기
            </p>
        </div>
    );
}

export default CardType02;