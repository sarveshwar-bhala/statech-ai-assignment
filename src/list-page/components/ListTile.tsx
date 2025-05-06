import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../ListPage.css"

function ListTile({e}) {
    const naviagte = useNavigate();

    return (
        <div
            onClick={() => {
                naviagte(`/detail/${e.id}`);
            }}
            key={e.id}
            className="listTile"
        >
            <p className="title">{e.title}</p>
            <p className="description">{e.body}</p>
        </div>
    );
}

export default ListTile;
