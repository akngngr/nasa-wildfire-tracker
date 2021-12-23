import searching from './Search.gif'
const Loader = () => {
    return (
        <div className="loader">
            <img src={searching} alt="loading" />
            <h1>Searching for Wildfires..</h1>
        </div>
    )
}

export default Loader
