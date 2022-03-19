import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [dataArr, setDataArr] = useState(data);
  const [selectedTags, setSelectedTags] = useState([]);

  const clearTagList = () => {
    setSelectedTags([]);
  };

  const selectTag = (e) => {
    let tagText = e.target.textContent;
    if (selectedTags.includes(tagText)) {
      console.log("already added");
      return;
    } else {
      setSelectedTags((prev) => [...prev, tagText]);
    }
  };

  const deleteSelectedTag = (e) => {
    let tagText = e.target.parentNode.children[0].textContent;
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagText));
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {selectedTags.length > 0 && (
          <section className="card selected-tags">
            <div className=" tags tags-container">
              {selectedTags.map((tag, index) => {
                return (
                  <div className="tag-container" key={index}>
                    <div className="tag-btn">{tag}</div>
                    <button className="tag-delete-btn" onClick={(e) => deleteSelectedTag(e)}>
                      <img src="./images/icon-remove.svg" alt="remove" />
                    </button>
                  </div>
                );
              })}
            </div>
            <button className="tag-clear-btn" onClick={clearTagList}>
              Clear
            </button>
          </section>
        )}
        {dataArr.map((item, index) => {
          return (
            <div className="card-wrapper" key={index}>
              <div className="left-accent"></div>
              <div className="card" key={item.id}>
                {/* Logo */}
                <div className="company-logo">
                  <img src={item.logo} alt="company" />
                </div>
                <div className="info-container">
                  {/* main info */}
                  <div className="company-header">
                    <h3 className="company-name">{item.company}</h3>
                    <div className="notification-container">
                      {item.new && <span className="notification new-noti">NEW!</span>}
                      {item.featured && <span className="notification feature-noti">FEATURED</span>}
                    </div>
                  </div>
                  <a href="/#" className="job-title">
                    {item.position}
                  </a>
                  {/* sub info */}
                  <div className="post-info">
                    <ul>
                      <li>{item.postedAt}</li>
                      <li>{item.contract} </li>
                      <li>{item.location}</li>
                    </ul>
                  </div>
                </div>
                {/* Tags */}
                <div className="tags">
                  {/* role tag */}
                  <button
                    onClick={(e) => {
                      selectTag(e);
                    }}
                    className="tag-btn"
                  >
                    {item.role}
                  </button>
                  {/* level tag */}
                  <button
                    onClick={(e) => {
                      selectTag(e);
                    }}
                    className="tag-btn"
                  >
                    {item.level}
                  </button>
                  {/* languges tags */}
                  {item.languages.map((item, index) => {
                    return (
                      <button
                        className="tag-btn"
                        onClick={(e) => {
                          selectTag(e);
                        }}
                        key={index}
                      >
                        {item}
                      </button>
                    );
                  })}
                  {/* tools tags */}
                  {item.tools.map((item, index) => {
                    return (
                      <button
                        className="tag-btn"
                        key={index}
                        onClick={(e) => {
                          selectTag(e);
                        }}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
