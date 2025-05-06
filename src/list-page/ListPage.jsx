import React, { useEffect, useState } from "react";
import "./ListPage.css";
import { getPosts } from "./apiCall";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/responseDataSlice";
import { useNavigate } from "react-router-dom";
import SwitchButton from "../switchButton/SwitchButton";

function ListPage() {
  const items = useSelector((state) => state.items.data);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState([]);
  const [isGrid, setIsGrid] = useState(true);
  const naviagte = useNavigate();
  useEffect(() => {
    getPosts().then((e) => {
      dispatch(addItem(e));
    });
  }, []);

  useEffect(() => {
    const filtered =
      search.trim() === ""
        ? items
        : items.filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          );
    setSearchItem(filtered);
  }, [search, items]);

  return items.length === 0 ? (
    <div className="listPage">Loading.....</div>
  ) : (
    <div className="listPageDiv">
      <div className="searchDiv">
        <input
          type="text"
          placeholder="Search using title..."
          onChange={(e) => setSearch(e.target.value)}
          className="search"
                  />
                  <SwitchButton isSwitchOn={isGrid} setSwitch={setIsGrid}/>
      </div>
      <div className={isGrid ? "listPageGrid" : "listPage"}>
        {searchItem.map((e) =>
          isGrid ? (
            <div
              onClick={() => {
                naviagte(`/detail/${e.id}`);
              }}
              key={e.id}
              className="listTileGrid"
            >
              <p className="titleGrid">{e.title}</p>
              <p className="description">{e.body}</p>
            </div>
          ) : (
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
          )
        )}
      </div>
    </div>
  );
}

export default ListPage;
