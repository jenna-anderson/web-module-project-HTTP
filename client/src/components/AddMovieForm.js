import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const initialValues = {
    title: "",
    director: "",
    genre: "",
    metascore: "",
    description: ""
}

const AddMovieForm = (props) => {
    const [newMovie, setNewMovie] = useState(initialValues);
    const { push } = useHistory();

    const onChange = (e) => {
        e.preventDefault();
        setNewMovie({
            ...newMovie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:5000/api/movies`, newMovie)
        .then(res => {
            props.setMovies(res.data)
            push('./')
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div className="col">
            <div className="modal-content">
                <form onSubmit={handleSubmit}>
                    <div className="modal-header">
                        <h4 className="modal-title">Add New Movie</h4>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Title</label>
                            <input 
                                type="text"
                                name="title"
                                value={newMovie.title}
                                onChange={onChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Director</label>
                            <input 
                                type="text"
                                name="director"
                                value={newMovie.director}
                                onChange={onChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input 
                                type="text"
                                name="genre"
                                value={newMovie.genre}
                                onChange={onChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Metascore</label>
                            <input 
                                type="text"
                                name="metascore"
                                value={newMovie.metascore}
                                onChange={onChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input 
                                type="text"
                                name="description"
                                value={newMovie.description}
                                onChange={onChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Add"/>
					<Link to={`/movies`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
				</div>
                </form>
            </div>
        </div>

    )
}      

export default AddMovieForm;