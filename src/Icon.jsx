export default function Icon ({shape, onClick, starred=false, disabled=false}) {

    const classes = (
        "glyphicon glyphicon-"+shape
        + (starred ? ' starred' : '')
        + (disabled ? ' disabledIcon' : '')
    )

    return (
    <i
        className={classes}
        onClick={onClick}
    ></i>
    )
}