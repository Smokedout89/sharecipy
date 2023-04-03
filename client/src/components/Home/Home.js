import styles from './Home.module.css'

export const Home = () => {
    return (
        <div className={styles.body}>
            <div className={styles.div}>
                <div className={styles.text}><h3>Welcome !</h3></div>
                {/* <img className={styles.photo} src="https://drive.google.com/uc?id=1j8YS6o-wf87asJpMPXWpKOcBuyqKT7y-" alt="" /> */}
            </div>
        </div>
    );
};