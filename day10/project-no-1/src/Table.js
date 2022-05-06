import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
//import React, { useState } from 'react';
import { Table, Tag, Space,} from 'antd';




const columns = [
    {
      title: 'Name', //title = head of the table
      dataIndex: 'name', //nested with value
      key: 'name', //must be same as key name
      render: (data, record) => {
          console.log(data, record);
          return <a href='https://github.com/'>{data}</a>
      },
      
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a href='https://github.com/'>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

// const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     getCheckboxProps: (record) => ({
//       disabled: record.name === 'Disabled User',
//       // Column configuration not to be checked
//       name: record.name,
//     }),
//   };
//   const Demo = () => {
//     const [selectionType, setSelectionType] = useState('checkbox');
//     return (
//       <div>
//         <Radio.Group
//           onChange={({ target: { value } }) => {
//             setSelectionType(value);
//           }}
//           value={selectionType}
//         >
//           <Radio value="checkbox">Checkbox</Radio>
//           <Radio value="radio">radio</Radio>
//         </Radio.Group>
  
//         <Divider />
  
//         <Table
//           rowSelection={{
//             type: selectionType,
//             ...rowSelection,
//           }}
//           columns={columns}
//           dataSource={data}
//         />
//       </div>
//     );
//   };

const TableComp = () => {
    return (<Table columns={columns} dataSource={data} />);
}

export default TableComp;