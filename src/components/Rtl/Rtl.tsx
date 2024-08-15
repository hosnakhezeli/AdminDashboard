import createCach from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { PropsWithChildren } from "react"
import stylesRTLPlugin from "stylis-plugin-rtl"


const cache = createCach({
    key : "fa",
    stylisPlugins : [stylesRTLPlugin]
}) 

function Rtl({ children } : PropsWithChildren) {
    return <CacheProvider value= {cache}>{children}</CacheProvider>
}

export default Rtl 