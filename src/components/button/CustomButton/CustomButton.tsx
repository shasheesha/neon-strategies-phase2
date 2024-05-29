
import './customButton.scss';

interface Props{
    submit?: boolean | false;
    btnSize: string | "normal";
    btnName: string;
    btnColor: string;
    animatColor?: string;
    withArrow?: boolean | false;
    onClick?: () => void;
}

const CustomButton: React.FC<Props> = ({submit, btnName, withArrow, btnColor, animatColor, btnSize, onClick}) => {

    return(
        <>
        <button type={submit === true ? "submit" : "button"} onClick={onClick} className={`custom-button ${btnColor} ${btnSize}`}>
            <span className="btn-name">{btnName}</span>
            {withArrow === true? (<div className="arrow-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 19 13.388">
                  <path id="Vector_1" data-name="Vector 1" d="M17.036,6H0M12.214,0,18,6l-5.786,6" transform="translate(0 0.694)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
                </svg>
            </div>)
             :""}
            {animatColor ? (
                <div className={`back-layer ${animatColor}`}></div>
            ): null}
        </button></>
    )
}
export default CustomButton;