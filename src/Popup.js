function Popup({ index,removeTask,setPopup}) {
    console.log('POPUP')
    
    return (
        <div className="modal">
            <div className="modal_box">
                <p>Are you sure you want to delete?</p>
                <button onClick={()=>{setPopup(false)}} className="modal_buttonCancel">Cancel</button>
                <button
                    onClick={()=>{removeTask(index); setPopup(false)}}
                    className="modal_buttonDelte">
                    Confirm
                </button>
            </div>
        </div>
    )
}

export default Popup
