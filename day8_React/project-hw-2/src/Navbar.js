import './App.css';
function NavbarComponent (){
    return (
        <nav className = "nav-item">
            <div className="NavIMG">
                <img src = "https://github.com/panotza/pikkanode/blob/master/pikkanode.png?raw=true" alt="navImage" />
            </div>
            <div className="NavContent">
                <ul>
                    <li>Create Pikka</li>
                    <li>Sign Up</li>
                    <li>Sign In</li>
                    <li>Sign Out</li>
                </ul>
            </div>
        </nav>
        
    );
}
export default NavbarComponent; 