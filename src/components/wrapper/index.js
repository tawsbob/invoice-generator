import styles from './Component.module.css';

function Wrapper({ className, children }){
    return (
        <div className={`${styles.container} ${className}`}>
            { children }
        </div>
    )
}

Wrapper.defaultProps = {
    className: null
}

export default Wrapper;