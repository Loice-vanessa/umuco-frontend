import React ,{ useState }from 'react';
import { Checkbox } from 'antd';




const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };


const  LastContent = () => {
    const [checkAll, setCheckAll] = useState(true); 
    return(
        <>
<h3>Tell us how you will pay</h3>
<Checkbox onChange={onChange} value={checkAll}>I will pay locally</Checkbox>;
</>
    )
}
export default  LastContent;
// const LastContent = () => {
   
//   console.log(`checked = ${e.target.checked}`);
// };

// <Checkbox onChange={onChange}>I will pay locally</Checkbox>;

// export default LastContent;
// const LastContent = () =>{
//     return(
//         <>
//       
//         <p>I will pay locally</p>
//         </>
//     )
// }
// export default LastContent