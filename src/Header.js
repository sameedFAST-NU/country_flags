export default function Header({changeTheme}) {
    return (
        <div className="header">
                <p className="title">Where in the world?</p>
                <button onClick={changeTheme}><i class="fa-regular fa-moon moonIcon"></i> Dark Mode</button>
        </div>
    )
}