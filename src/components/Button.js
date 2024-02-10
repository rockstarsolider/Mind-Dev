import "./Button.css";
import { gsap } from "gsap";

const Button = ({ primary, secondary, solid, children, onClick, ...rest }) => {
    const onEnter = ({ currentTarget }) => {gsap.to(currentTarget, { backgroundColor: '#3a45a1', scale: 1.05 });};
    const onLeave = ({ currentTarget }) => {gsap.to(currentTarget, { backgroundColor: "#3646D3", scale: 1 });};

    const onEnter2 = ({ currentTarget}) => {gsap.to(currentTarget, { backgroundColor: '#474747', scale: 1.05 });};
    const onLeave2 = ({ currentTarget }) => {gsap.to(currentTarget, { backgroundColor: "#222020", scale: 1 });};

    if (primary) {
        return <button {...rest} onClick={onClick} className='primaryButton' onMouseEnter={onEnter} onMouseLeave={onLeave}>{children}</button>;
    } else if (secondary) {
        return <button {...rest} onClick={onClick} className="secondary-button" onMouseEnter={onEnter2} onMouseLeave={onLeave2}>{children}</button>;
    } else if (solid) {
        return <button {...rest} className="solid-button">{children}</button>;
    }
}

export default Button;