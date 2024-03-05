import './employees-add-form.css'
import {Component} from 'react'

class EmpoyeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
            increase: false,
            id: 4
        }

    }

    onValueChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )

    }
    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state
        if (name.length > 3 && +salary > 0){
            this.props.onAdd(this.state.name, this.state.salary)
            this.setState({
                name: '',
                salary: ''
            })} 


    }


    render() {

        const {name, salary} = this.state;
        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex"
                onSubmit={this.onSubmit}>
                    
                    <input type="text"
                        onChange={this.onValueChange} 
                        className="form-control new-post-label" 
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}/>
                    <input type="number" 
                        onChange={this.onValueChange} 
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}/>
                    <button 
                        
                    type="submit" 
                    className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
    

}

export default EmpoyeesAddForm;