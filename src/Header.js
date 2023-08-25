export default function Header({changeTheme, darkMode}) {
    return (
        <div className={darkMode ? 'header darkElement': 'header lightElement'}>
                <p className="title">Where in the world?</p>
                <button onClick={changeTheme} className={darkMode ? 'darkElement': 'lightElement'}>
                    <i class="fa-regular fa-moon moonIcon"></i> Dark Mode
                </button>
        </div>
    )
}