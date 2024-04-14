import React from "react";
import type { GatsbyBrowser } from "gatsby";
import LayoutWrapper from './src/stories/components/Layout/Layout';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
    return (
        <LayoutWrapper>
            {element}
        </LayoutWrapper>
    )
}
