export default function HeaderButton ({name, active, onClick}) {
    const classes=`btn btn-default ${active? 'active' : ''}`

    return (
        <div class="btn-group">
            <button type="button" className={classes} onClick={onClick}>{name}</button>
        </div>
    )
}