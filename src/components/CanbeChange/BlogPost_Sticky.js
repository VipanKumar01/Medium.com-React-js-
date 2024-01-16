import React from 'react'
import CommonBlogPost from './CommonBlogPost'

function BlogPost_Sticky() {
  var data = [
    [1, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/yoda.jpg", "Jan 11 · 9 min read"],
    [2, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/a.jpg", "Jan 11 · 9 min read"],
    [3, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/b.png", "Jan 11 · 9 min read"],
    [4, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/yoda.jpg", "Jan 11 · 9 min read"],
    [5, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/a.jpg", "Jan 11 · 9 min read"],
    [6, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/e.png", "Jan 11 · 9 min read"],
    [7, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/a.jpg", "Jan 11 · 9 min read"],
    [8, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/b.png", "Jan 11 · 9 min read"],
    [9, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/e.png", "Jan 11 · 9 min read"],
    [10, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/a.jpg", "Jan 11 · 9 min read"],
    [11, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/yoda.jpg", "Jan 11 · 9 min read"],
    [12, "Top Zimbroff", "At Skywalker Ranch We Were", "A Photoshoot with George Lucas & Yoda", "assets/e.png", "Jan 11 · 9 min read"],
  ]
  return (
    <>
      <CommonBlogPost count={data[0][0]} subHeading={data[0][1]} title={data[0][2]} desc={data[0][3]} img={data[0][4]} date={data[0][5]} />
      <CommonBlogPost count={data[1][0]} subHeading={data[1][1]} title={data[1][2]} desc={data[1][3]} img={data[1][4]} date={data[1][5]} />
      <CommonBlogPost count={data[2][0]} subHeading={data[2][1]} title={data[2][2]} desc={data[2][3]} img={data[2][4]} date={data[2][5]} />
      <CommonBlogPost count={data[3][0]} subHeading={data[3][1]} title={data[3][2]} desc={data[3][3]} img={data[3][4]} date={data[3][5]} />
      <CommonBlogPost count={data[4][0]} subHeading={data[4][1]} title={data[4][2]} desc={data[4][3]} img={data[4][4]} date={data[4][5]} />
      <CommonBlogPost count={data[5][0]} subHeading={data[5][1]} title={data[5][2]} desc={data[5][3]} img={data[5][4]} date={data[5][5]} />
      <CommonBlogPost count={data[6][0]} subHeading={data[6][1]} title={data[6][2]} desc={data[6][3]} img={data[6][4]} date={data[6][5]} />
      <CommonBlogPost count={data[7][0]} subHeading={data[7][1]} title={data[7][2]} desc={data[7][3]} img={data[7][4]} date={data[7][5]} />
      <CommonBlogPost count={data[8][0]} subHeading={data[8][1]} title={data[8][2]} desc={data[8][3]} img={data[8][4]} date={data[8][5]} />
      <CommonBlogPost count={data[9][0]} subHeading={data[9][1]} title={data[9][2]} desc={data[9][3]} img={data[9][4]} date={data[9][5]} />
    </>
  )
}

export default BlogPost_Sticky