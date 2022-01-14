import React from 'react';
import "./assets/css/custom.css"
import TopNav from "./Component/NavBar/TopNav";
import SideBar from "./Component/NavBar/SideBar";
import SideBarAndContentWrapper from "./Component/Wrapper/SideBarAndContentWrapper";
import ContentWrapper from "./Component/Wrapper/ContentWrapper";

function App(props) {
    return (
        <>
            <TopNav/>
            {/*side bar and content wrapper*/}
            <SideBarAndContentWrapper>
                <SideBar/>
                {/*only content wreapper*/}
                <ContentWrapper>
                    <h5>hello bangladesh</h5>
                </ContentWrapper>
            </SideBarAndContentWrapper>
        </>
    );
}

export default App;