export default function Icon ({shape, onClick, starred=false}) {
const classes ="glyphicon glyphicon-"+shape + starred ? ' starred' : ''

    return (
    <i
        className={classes}
        onClick={onClick}
    ></i>
    )
}