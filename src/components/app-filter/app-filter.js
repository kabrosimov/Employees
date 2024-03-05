import { Component } from 'react'
import './app-filter.css'
// const AppFilter = () =>{
class AppFilter extends Component{
    
   
    render() {
        // const btnName = this.state.activeBtnName;
        const btnName = this.props.filter;
        // console.log(btnName)

        const buttonsData = [
            {title: 'Все сотрудники', name: 'all'},
            {title: 'На повышение', name: 'rise'},
            {title: 'З/П больше 1000$', name: 'more'},
        ];
        const buttons = buttonsData.map(({title, name}) => {
            return (
                <button 
                className={btnName === name?"btn btn-light": "btn btn-outline-light"}                
                type="button"
                key={name}
                onClick={() => this.props.onFilter(name)}
                >
                    {title}
                </button>
            )
        })
        return(
            // const activeBtn = this.activeBtnName;
            
            <div className="btn-group">
                {buttons}
                {/* <button 
                className={btnName === 'all'?"btn btn-light": "btn btn-outline-light"}                
                type="button"
                name="all">
                    Все сотрудники
                </button>
                <button 
                className={btnName === 'rise'?"btn btn-light": "btn btn-outline-light"} 
                type="button"
                name="rise">
                    На повышение
                </button>
                <button 
                className={btnName === 'more'?"btn btn-light": "btn btn-outline-light"} 
                type="button"
                name="more">
                    З/П больше 1000$
                </button> */}
            </div>
        )
    }
    
}

export default AppFilter