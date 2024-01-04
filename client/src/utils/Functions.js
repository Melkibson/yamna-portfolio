import {bp} from "./styles/CommonStyle";
import {useEffect, useState} from "react";

export function ResImage(images){
    const [src, setSrc] = useState("")
    useEffect( () => {
        images.map(image => {
            if (window.matchMedia(`(max-width: ${bp.tablet}px) and (min-width: ${bp.mobile}px)`).matches) {
                if(image.tablet !== undefined)
                    setSrc(image.tablet )
                } else if (window.matchMedia(`(max-width: ${bp.mobile}px)`).matches) {
                    if(image.mobile !== undefined)
                        setSrc(image.mobile)
                } else {
                if(image.desktop !== undefined)
                    setSrc(image.desktop)
                }
                return image
            }
        )
    }, [images])
    return src
}
