import React from 'react'

export default function NoteItem(props) {
    const note = props.notes;
    return (
        <div className="col-md-3 my-4 mx-3">
            <div className="card my-4" >

                <div className="card-body">
                    <h4 className="card-title">{note.title}</h4>
                    <h6 className="card-text">{note.description}</h6>

                </div>
            </div>

        </div>
    )
}

