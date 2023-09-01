export default function DetailPageButton({darkMode, label}) {
    return(
        <button  className={darkMode ? 'detailPageButton darkElement': 'detailPageButton lightElement'}>
            {label}
        </button>
    )
}