import { useEffect, useState } from "react"
import styles from './Counter.module.css'

export function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count != 0 && count % 100 == 0 && 'vibrate' in navigator) navigator.vibrate(500)
    }, [count])

    return (
        <div
          className={styles.button}
          onClick={() => setCount((count) => count + 1)}
          onTouchStart={() => setCount((count) => count + 1)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (!e.repeat && (e.key === "Enter" || e.key === " "))
            {
                e.preventDefault();
                setCount((count) => count + 1);
            }
          }
        }>
            {count}
        </div>
    )
}