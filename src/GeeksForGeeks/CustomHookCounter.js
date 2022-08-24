import CustomHook from "./CustomHook";

function CustomHookCounter(){
    const [count, updateCount] = CustomHook(0)
    return <>
        <div>
            <button onClick={updateCount}>Count: {count}</button>
        </div>
    </>
}

export default CustomHookCounter;