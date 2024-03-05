import './app.css'
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
// import EmployeesListItem from '../employees-list-item/employees-list-item';
import EmployeesList from '../employees-list/employees-list';
import EmpoyeesAddForm from '../employees-add-form/employees-add-form';
import {Component} from 'react'



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    name: 'John Smith',
                    salary: 800,
                    increase: false,
                    id: 1,
                    emplReady: true
                },
                {
                    name: 'Alex Scooter',
                    salary: 3000,
                    increase: false,
                    id: 2,
                    emplReady: false
                },
                {
                    name: 'Natali Portman',
                    salary: 15000,
                    increase: true,
                    id: 3,
                    emplReady: false
                }
            ],
            term: '',
            btn: 'all'


        }
        

        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id )
            }
        }
        )
    }
    addItem = (name, salary) => {
        const newEmployees = {
            name: name,
            salary: salary,
            id: this.maxId++,
            increase: false,
            emplReady: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newEmployees]
            
            return {
                 data: newArr
            }
        })

    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id )
        //     const old = data[index]
        //     const newItem = {
        //         ...old,
        //         increase: !old.increase
        //     };
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        //     return {
        //         data: newArr
        //     }
            
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {
                        ...item,
                        increase: !item.increase
                    }                    
                }
                return item;
            })
        }))

    }
    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {
                        ...item,
                        emplReady: !item.emplReady
                    }                    
                }
                return item;
            })
        }))

    }
    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id){
                    return {
                        ...item,
                        [prop]: !item[prop]
                    }                    
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        
            if (term.length === 0){
                return items
            } 
                return items.filter(item => item.name.toUpperCase().includes(term.toUpperCase()));
        
        // return searchStr(items, term);
        
        
        

    }
    searchBtn = (data, filter) => {
        switch (filter) {
            case 'all':
                return data;
            case 'rise':
                return data.filter(item => item.emplReady)
            case 'more':
                return data.filter(item => item.salary > 1000)

        }
    }
    onUpdateSearch = (term) => {
        this.setState({
            term: term
        });
    }

    
    onFilter = (btn) => {
        this.setState({
            btn: btn
        })
        // if (btn === 'rise'){
        //     this.setState(({data}) =>(
        //     {
        //         data : data.filter((item) => item.emplReady)
        //     })

        //     );
        // } else if (btn === 'rise'){
        //     this.setState(({data}) => ({
        //         data: data.filter(item => item.salary > 1000)
        //     }))
        // }
        // console.log(btn)

    }
    updateSalary = (id, newSalary) =>{
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                if (item.id === id){
                    return {
                        ...item,
                        salary: newSalary
                    }
                } 
                return item
                
            })
        }
        })
    }
  

    render() {    
        const {data,term, btn} = this.state 
        const allEmpl = data.length;
        const onlyIncrease = data.filter(item => item.increase).length;
        const onlyReady = data.filter(item => item.emplReady).length;
        const visibleData = this.searchBtn(this.searchEmp(data, term), btn);

    
    
        return (
            <div className="app">
                <AppInfo allEmpl={allEmpl} onlyIncrease={onlyIncrease} onlyReady={onlyReady}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter onFilter={this.onFilter}  filter={btn}/>
                </div>
                    <EmployeesList data= {visibleData}
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    // onToggleRise={this.onToggleRise}
                    onToggleProp={this.onToggleProp}
                    updateSalary={this.updateSalary}
                    />
                    <EmpoyeesAddForm
                    onAdd={this.addItem}/>
    
    
            </div>
        )
    }
    
}

    
export default App;