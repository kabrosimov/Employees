import './employees-list-item.css'
import {Component} from 'react'

class EmployeesListItem extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         emplReady: false
    //     }
    // }

    // onIncrease = () =>{
    //     this.setState(({increase}) => ({
    //         increase: !increase
    //     }))
    // }
    // upEmployees = () =>{
    //     this.setState(({emplReady}) => ({
    //         emplReady: !emplReady
    //     }))
    // }
    render(){
        const {name,salary,onDelete,onToggleProp,increase,emplReady, updateSalary} = this.props;
        // const {increase, emplReady} = this.state;
        

        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase){
            classNames += ' increase'
        }
        if (emplReady){
            classNames += ' like'
        }

        return(
            <li className={classNames}>
                <span className="list-group-item-label"
                onClick={onToggleProp} data-toggle="emplReady">{name}</span>
                <input type="text" onChange={updateSalary} className="list-group-item-input" defaultValue={salary+'$'}/>
                <div className="d-flex justify-content-center align-item-center">
                    <button type="button"
                    onClick={onToggleProp}
                    data-toggle="increase"
                    className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button 
                        onClick={onDelete}
                        type="button" 
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
        }

    

}

export default EmployeesListItem;