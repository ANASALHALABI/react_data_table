import { useState } from "react";
import "./EmployeeForm.style.css";
import { IEmployee } from "./Employee.type";
type props = {
  onBackBtnClickHun: () => void;
  onSubmitDataHun: (data: IEmployee) => void;
};

export default function AddEmployee(props: props) {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const { onBackBtnClickHun, onSubmitDataHun } = props;

  const onFirstNameVhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const onLastNameVhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlastName(e.target.value);
  };
  const onEmailVhange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onSubmitBtnDataHun = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lasttName,
      email: email,
    };
    onSubmitDataHun(data);
    onBackBtnClickHun();
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={onSubmitBtnDataHun}>
          <div>
            <label> First Name : </label>
            <input type="text" value={firstName} onChange={onFirstNameVhange} />
          </div>
          <div>
            <label> Last Name : </label>
            <input type="text" value={lasttName} onChange={onLastNameVhange} />
          </div>
          <div>
            <label> Email add : </label>
            <input type="text" value={email} onChange={onEmailVhange} />
          </div>
          <div>
            <input type="button" value="Back" onClick={onBackBtnClickHun} />
            <input type="submit" value="Add Employee" />
          </div>
        </form>
      </div>
    </>
  );
}
