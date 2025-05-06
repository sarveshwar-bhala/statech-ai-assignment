import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../ListPage.css"

function ListTile({e,tileClass,titleClass}) {
    const naviagte = useNavigate();

    return (
        <div
            onClick={() => {
                naviagte(`/detail/${e.id}`);
            }}
            key={e.id}
            className={tileClass}
        >
            <p className={titleClass}>{e.title}</p>
            <p className="description">{e.body}</p>
        </div>
    );
}

export default ListTile;
