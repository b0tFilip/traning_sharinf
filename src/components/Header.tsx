import "./Header.css";
import HeaderButton from "./HeaderButton";
const Header = (props: any) => {
    return (
        <div className={"headerContainer " + props.theme}>
            <div className="Logo">
                <p style={{ color: "red" }} className="LogoLetter">
                    V
                </p>
                <p style={{ color: "blue" }} className="LogoLetter">
                    T
                </p>
                <p style={{ color: "blac" }} className="LogoLetter">
                    S
                </p>
            </div>
            <div className="NavBar">
                <HeaderButton
                    page={props.page}
                    updatePage={props.updatePage}
                    theme={props.theme}
                    pagePointer="Practice Sets"
                />
                <HeaderButton
                    page={props.page}
                    updatePage={props.updatePage}
                    theme={props.theme}
                    pagePointer="Training List"
                />
                <HeaderButton
                    page={props.page}
                    updatePage={props.updatePage}
                    theme={props.theme}
                    pagePointer="My Account"
                />
            </div>
        </div>
    );
};
export default Header;
