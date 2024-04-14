import React from "react";
import { GatsbySSR } from "gatsby";
import LayoutWrapper from "./src/stories/components/Layout/Layout";

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
    return (
        <LayoutWrapper>
            {element}
        </LayoutWrapper>
    )
}