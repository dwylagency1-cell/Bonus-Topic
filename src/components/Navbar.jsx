function Navbar(props) {
    function changeTheme() {
        props.setTheme('Dark')
    }
    return <div>
        <div>
            <h3>{props.theme}</h3>
            <button onClick={changeTheme}>Change theme</button>
        </div>
    </div>
}
export default Navbar