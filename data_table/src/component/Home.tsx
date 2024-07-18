import { useState } from "react";
import "./style.css";
import { IEmployee, pageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmplpyee from "./EditEmplpyee";
function Home() {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [showPage, setShowPage] = useState(pageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  const onAddEmployeeClickHun = () => {
    setShowPage(pageEnum.add);
  };

  const showListPage = () => {
    setShowPage(pageEnum.list);
  };
  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };
  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
  };
  const editEmployeeData = (data: IEmployee) => {
    setShowPage(pageEnum.edit);
    setDataToEdit(data);
  };
  const upDateData = (data: IEmployee) => {
    const filterdData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filterdData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    setEmployeeList(tempData);
  };
  return (
    <>
      <section className="section-content">
        {showPage === pageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClickHun}
            />
            <EmployeeList
              list={employeeList}
              onDeleteBtnClickHun={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {showPage === pageEnum.add && (
          <AddEmployee
            onBackBtnClickHun={showListPage}
            onSubmitDataHun={addEmployee}
          />
        )}
        {showPage === pageEnum.edit && (
          <EditEmplpyee
            data={dataToEdit}
            onBackBtnClickHun={showListPage}
            onUbdateClikHun={upDateData}
          />
        )}
      </section>
    </>
  );
}
export default Home;
