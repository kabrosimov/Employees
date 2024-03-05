import { Component } from "react"
import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'
// const EmployeesList  = ({data, onDelete}) =>{
    class EmployeesList extends Component{
        constructor(props){
            super(props)
        
        }
        render(){
            const {data, onDelete, onToggleProp, updateSalary} = this.props;
            const elements = data.map(item => {
                const {id, ...itemProps} = item;
                return (
                    <EmployeesListItem 
                        key = {id} 
                        {...itemProps}
                        onDelete = {() => {
                            onDelete(id)
                            }
                         }
                        onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
                        updateSalary = {(e) => updateSalary(id, e.target.value.replace('$',''))}
                        
                        />
                )
            });
        
        
            return (
                <ul className="app-list list-group">
                    {elements}
                </ul>
            )
        }
        
    }

   


export default EmployeesList;