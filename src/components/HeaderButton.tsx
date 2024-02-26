import "./Header.css";

const HeaderButton = ({ theme, page, updatePage, pagePointer }: any) => {
    return (
        <button
            className={"buttonContainer " + theme}
            onClick={() => updatePage(pagePointer)}
        >
            {page == pagePointer && <div className="activeIcon"></div>}
            <p className={"buttonText " + theme}> {pagePointer} </p>
        </button>
    );
};

export default HeaderButton;
