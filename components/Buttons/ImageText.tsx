import styles from '@/styles/Button.module.css'
import Image from 'next/image'

function ImageText({ image, text, onclick }: { image: string, text: string, onclick?: () => void}) {
    return (
        <button className={styles["button"]} onClick={onclick}>
            <Image className={styles["image"]} src={`http://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/web/${image}`} alt={""} width={200} height={200} />
            <div>{text}</div>
            <span />
        </button>
    )

}

export default ImageText
