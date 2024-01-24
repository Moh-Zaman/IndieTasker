import React from "react";
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Slide.css";

const Slide = () => {
    return (
    <div>
      {/* <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={true} // Replace with a condition based on your data source
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>} */}
    </div>
    )
}

export default Slide;
