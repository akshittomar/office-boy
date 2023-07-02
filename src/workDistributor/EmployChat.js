import React,{useState,useRef} from 'react'

function EmployChat() {

    const [chat, setchat] = useState("");

    const refChat = useRef(null);

    const refCloseChat = useRef(null);
    const updateChat=()=>{
  
    }

    const handelChat=(e)=>{
        setchat(e.target.value);
      }

 
  return (
    <div>
     <div  >
                <button type="button" ref={refChat} className="btn btn-secondary  " data-bs-toggle="modal" data-bs-target="#exampleModal2"   >
                  Discuss
                </button>



                <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                  <div className="modal-dialog  ">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel2">Chat Here</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <form  onSubmit={e => e.preventDefault()} >
                      <label htmlFor="chat" className="form-label"  ></label>
                        <input type='text' name='chat' className="form-control" id='chat' onChange={handelChat} value={chat} placeholder='Start Typing....'  minLength={1}></input>
                        </form>
                      </div>
                      <div className="modal-footer">
                        <button type="button" ref={refCloseChat} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={updateChat}>Send</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
    </div>
  )
}

export default EmployChat