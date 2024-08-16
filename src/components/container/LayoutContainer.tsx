import React, { ReactNode } from "react";
import Header from "../header/Header";
import  Container  from "@mui/material/Container";


interface LayoutContainerProps {
    children : ReactNode;
}

const LayoutContainer: React.FC <LayoutContainerProps> = ({children}) => {
    return (
        <Container maxWidth={false} sx={{ padding: { xs: 1, sm: 2, md: 3 } }}>
            <Header />
            {children}
        </Container>
    );
};


export default LayoutContainer