import React from "react";
import "./Recentnews.css";

const RecentNews = ({ displayTrio }) => {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  /**
   * converts date object to month name
   * @param {Object} date
   * @returns month name string
   */
  const dateHelperMonth = (date) => {
    const mm = date.getMonth(); //month starts with 0 so add 1
    return months[mm];
  };

  /**
   * converts date object to day string
   * @param {Object} date
   * @returns date string
   */
  const dateHelperDay = (date) => {
    const dd = String(date.getDate());
    return dd;
  };

  /**
   * converts date object to year string
   * @param {Object} date
   * @returns year string
   */
  const dateHelperYear = (date) => {
    const yyyy = String(date.getFullYear());
    return yyyy;
  };

  return (
    <div className="aboutMainDiv" role="main">
      <div className="container containerNews">
        <h1 className="recentNewsTitle">Recent News</h1>
        <div className="row">
          {displayTrio.map((newsData, idx) => (
            <div className="col" key={idx}>
              <img className="imgs" src={newsData.img_url} alt="current news" />
              <div className="caption-div">
                <div className="date-div">
                  <div className="day-div">
                    {dateHelperDay(new Date(newsData.date))}
                  </div>
                  <div className="month-div">
                    {" "}
                    {dateHelperMonth(new Date(newsData.date))}{" "}
                  </div>
                  <div className="year-div">
                    {dateHelperYear(new Date(newsData.date))}{" "}
                  </div>
                </div>
                <span className="caption">{newsData.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
