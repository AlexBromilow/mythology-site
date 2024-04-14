import React, { FunctionComponent, ReactNode } from "react";
import GlobalStyles from "../../../styles/GlobalStyles";
import Typography from "../../../styles/Typography";


type LayoutProps = {
    children: ReactNode[] | ReactNode
}
const LayoutWrapper: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Typography />
            {children}
        </>
    )
}

export default LayoutWrapper;