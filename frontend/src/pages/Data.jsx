import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page,Toolbar,Sort } from '@syncfusion/ej2-react-grids';
import { useEffect,useState } from 'react';
import { procurementData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Data = () => {
const [toolbarOptions, setToolBarOptions] = useState(null);
const [editing, setEditing] = useState(null);


useEffect(() => {
  setToolBarOptions(["Search"]);
  setEditing({ allowDeleting: true, allowEditing: true });
}, []);

  return (
    <div className="bg-color-own m-2 md:m-10 mt-24 p-2 md:p-10  rounded-3xl">
      <Header   title="GeBiz Procurement" />
      
      <GridComponent
        dataSource={procurementData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 6 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search,Toolbar, Page,Sort]} />

      </GridComponent>
    </div>
  );
};
export default Data;
