import React, { useState } from 'react';
import axios from 'axios';
import { apiURL } from '../../util/apiURL';

export default function CreatePostForm({ updatePosts }) {
    const [body, setBody] = useState("");
    const API = apiURL();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method: 'post',
            url: `${API}/api/todos`, 
            data: {
                body, 
                poster_id: 1
            }
        })
        setBody("");
        updatePosts();
    }

    return(
        <form onSubmit={handleSubmit}>
            <textarea value={body} onChange={(e) => setBody(e.target.value)}/>
            <button type="submit">Create Post</button>
        </form>
    )
};
