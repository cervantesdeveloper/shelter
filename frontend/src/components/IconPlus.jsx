export default function IconPlus({iconPlusClick, open, color}){
    const styles = {
        backgroundColor: color === "orange" ? "#BF5630" : "#6D7345"
    }
    return(
        <div 
            className={`plus-icon ${open && "minus-icon"}`} 
            onClick={iconPlusClick} 
        >
            <span style={styles}></span>
            <span style={styles}></span>
        </div>
    )
}
