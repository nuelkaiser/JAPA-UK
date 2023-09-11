import styles from "./Button.module.scss";

export const Button: React.FC<JSX.IntrinsicElements["div"]> = (props) => {
    return (
        <div {...props} className={`${styles.Button} ${props.className}`}>
            {props.children}
        </div>
    );
};

export const Button1: React.FC<JSX.IntrinsicElements["div"]> = (props) => {
    return (
        <div {...props} className={`${styles.Button1} ${props.className}`}>
            {props.children}
        </div>
    );
};

export const Button2: React.FC<JSX.IntrinsicElements["div"]> = (props) => {
    return (
        <div {...props} className={`${styles.Button2} ${props.className}`}>
            {props.children}
        </div>
    );
};