import React, { ReactNode } from "react";
// import Header from "../header/Header";
import  Container  from "@mui/material/Container";
import ClippedDrawer from "../sidebar/ClippedDrawer"

interface LayoutContainerProps {
    children : ReactNode;
}

const LayoutContainer: React.FC <LayoutContainerProps> = ({children}) => {
    return (
        <Container maxWidth={false} sx={{ padding: { xs: 5, sm: 6, md: 5 } }}>
            <ClippedDrawer />
            {children}
        </Container>
    );
};


export default LayoutContainer