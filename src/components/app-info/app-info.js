import './app-info.css'
const AppInfo = ({allEmpl, onlyIncrease, onlyReady}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmpl}</h2>
            <h2>Премию получат: {onlyIncrease}</h2>
            <h2>Готовы к повышению: {onlyReady}</h2>
        </div>
    )

}

export default AppInfo;