import { IEmployee } from "./Employee.type";
import "./EmployeeForm.style.css";
import { useState } from "react";
type props = {
  data: IEmployee;
  onBackBtnClickHun: () => void;
  onUbdateClikHun: (data: IEmployee) => void;
};

export default function EditEmplpyee(props: props) {
  const { data, onBackBtnClickHun, onUbdateClikHun } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lasttName, setlastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

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
    const ubDatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lasttName,
      email: email,
    };
    onUbdateClikHun(ubDatedData);
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
            <input type="submit" value="Update Employee" />
          </div>
        </form>
      </div>
    </>
  );
}
