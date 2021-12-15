import React from 'react'

function Notes() {
  return (
    <div>
        <div className="album-details-form">
            <form  onSubmit={handleSubmit}>
              <input 
                className="note-input"
                placeholder="Title"
                value={review.title}
                name="title"
                required
                onChange={handleChange}
              />
              <input
                className="note-input"
                placeholder="Enter a note"
                value={review.desciption}
                name="desciption"
                required
                onChange={handleChange}
              />
                <button className="album-detail-formsubmit 
              "type="submit">Submit
                </button>
            </form>
            <div className = "album-detail-notes-map">
              {album.notes.length > 0
                ? album.notes.map((note) => (
                    <div className = "album-detail-notes">
                      <h4 className = "album-detail-title">{note.title} </h4>
                      <p className = "album-detail-note">{note.desciption}</p>
                    </div>
                  ))
                : null}
            </div>
        </div>
    </div>
  )
}

export default Notes
