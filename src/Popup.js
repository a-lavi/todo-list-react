import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import CheckIcon from '@mui/icons-material/Check'
import './Style.css'

function Popup({ index, removeTask, setPopup }) {
    console.log('POPUP')

    return (
        <div className="modal">
            <div className="modal_box">
                <p>Are you sure you want to delete?</p>
                <button
                    onClick={() => {
                        setPopup(false)
                    }}
                    className="modal_buttonCancel">
                    <CloseOutlinedIcon />
                </button>
                <button
                    onClick={() => {
                        removeTask(index)
                        setPopup(false)
                    }}
                    className="modal_buttonDel">
                    <CheckIcon />
                </button>
            </div>
        </div>
    )
}

export default Popup
