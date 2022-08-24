import { useState } from "react";

function CustomHook(initializer){
    const [count, setCount] = useState(initializer)
    function handleCount(){
        setCount(count + 1)
    }
    return [count, handleCount]
}
export default  CustomHook;