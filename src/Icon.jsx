export default function Icon ({shape, onClick, starred=false, disabled=false}) {
const classes ="glyphicon glyphicon-"+shape + (starred ? ' starred' : '') //+ (disabled ? ' disabledIcon' : '')
const style = disabled? {opacity: 0.2, cursor: 'not-allowed'} : {} //nodig omdat hoge CSS specificiteit nodig was.


    return (
        <i
            className={classes}
            onClick={onClick}
            style={style}
        ></i>
    )
}