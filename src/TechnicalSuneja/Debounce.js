import React from 'react'

function Debounce() {

    function debounce(d){
        let timer;
        return function(e){
            
            clearTimeout(timer);
            timer = setTimeout(() => {
                console.log(e.target.value)
                console.log('Debounced')
            }, d);
        }
    }

    const handleSearch = debounce(2000)

    return <>
        <input type='text' onChange={e => handleSearch(e)}></input>
    </>


//     const show = () => {
//         console.log('Its my turn')
//     }
//     const debounce = (fn, delay) => {
//         let timer;
//         return function(){
            
//             // if(timer){
//             //     clearTimeout(timer)
//             // }
//             clearTimeout(timer)
//             timer = setTimeout(() => fn(), delay)
            
//         }
//     }
//     const handleSearch = debounce(show, 3000)
//   return (<>
//     <div>Example</div>
//     <input type='text' onChange={() => handleSearch()}/>
//     </>)
}

export default Debounce