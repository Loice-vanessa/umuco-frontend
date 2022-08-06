import React , { useState }from "react";
import { Select, DatePicker, Space ,Checkbox, Divider,TimePicker,Button }   from 'antd';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Mon', 'Tue','Wed','Thu','Fri'];
const defaultCheckedList = ['Mon', 'Tue','Wed','Thu','Fri'];
const FirstContent =()=>{


const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(true);
  const [open, setOpen] = useState(false);

    const { RangePicker } = DatePicker;
  
    
    const { Option } = Select;

    
    return(
        <>
        <br></br>
        <h3 >Please Select Category</h3>
        
        <ul>
            <li>Category
            <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Kinyarwanda Coaching</Option>
    <Option value="2">Traditional Dances Coaching</Option>
    <Option value="3">Trial</Option>
    
  </Select>
            </li>
            <li>Course
            <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Kinyarwanda Courses I(1h)</Option>
    <Option value="2">Traditional Courses II(1h)</Option>
    <Option value="2">Traditional Courses III(1h)</Option>
    <Option value="3">Trial</Option>
    
  </Select>
            </li>
            <li>Coach
            <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => option.children.includes(input)}
    filterSort={(optionA, optionB) =>
      optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
    }
  >
    <Option value="1">Icyeza Vanessa</Option>
    <Option value="2">Ingabire Immaculate</Option>
    <Option value="3">Ishimwe M. Claire</Option>
    
  </Select>
            </li>
        </ul>
<br></br>
        <h3 >Am available on
   
      <Divider />
      <CheckboxGroup options={plainOptions} value={checkedList}  />
      <Space direction="horizontal" size={12} >
    <RangePicker picker="month" />
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  </Space>
  </h3>
        </>
    )
}
export default FirstContent