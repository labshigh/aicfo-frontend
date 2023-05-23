import styles from "./cardType01.module.css";
import icoStar from "@/assets/ico/star.png";
import Image from "next/image";
export interface CardType01Props {
    id: number;
    category: string;
    title: string;
    content: string;
    star: number;
}
const CardType01: React.FC<CardType01Props> = ({category, title, content, star, ...props}) => {
    return (
        <div className={styles.cardItem}>
            <p className={`txt-small ${styles.category}`}>{category}</p>
            <p className={`txt-normal ${styles.title}`}>{title}</p>
            <p className={`txt-normal ${styles.content}`}>{content}</p>
            <p className={styles.starList}>
                {Array(star).fill(
                    <Image src={icoStar} alt="" className={styles.star} />,
                )}
            </p>
        </div>
    );
}

export default CardType01;