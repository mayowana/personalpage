import styles from './Marketing.module.scss'
import logo from '../media/logo.png';

const Marketing = () => {

    return (
        <>
            <div>
                <nav>
                    <div className={styles.logobox}><img src={logo} alt="logo"></img></div>
                    <div>
                        <ul className={styles.navlist}>
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>WORK</li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <div>
                        <h2>Marketing that works, from Strategy to Execution</h2>
                        <p>Growing and scaling your business isn't a science. It's an art. And I'm Pablo fucking Picasso.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketing;