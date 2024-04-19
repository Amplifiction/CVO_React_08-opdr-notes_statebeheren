export default function HeaderButton ({name, active, onClick, disabled=false}) {
    const classes=`btn btn-default ${active? 'active' : ''}`

    return (
        <div className="btn-group">
            <button
                type="button"
                className={classes}
                onClick={onClick}
                disabled={disabled}
            >{name}</button>
        </div>
    )
}