import { IEmployee } from "./Employee.type";
import "./EmployeeModal.style.css";

type props = {
  onClose: () => void;
  data: IEmployee;
};

export default function EmployeeModal(props: props) {
  const { onClose, data } = props;

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          <h3>Employee Data</h3>
          <div>
            <div>
              <label>First name : {data.firstName}</label>
            </div>
            <div>
              <label>Last name : {data.lastName}</label>
            </div>
            <div>
              <label>Email : {data.email}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
