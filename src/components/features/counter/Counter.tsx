import { useEffect, useState } from "react"
import styles from './Counter.module.css'

export function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count != 0 && count % 100 == 0 && 'vibrate' in navigator) navigator.vibrate(500)
    }, [count])

    return (
        <button className={styles.button} onClick={() => setCount((count) => count + 1)}>
            {count}
        </button>
    )
}