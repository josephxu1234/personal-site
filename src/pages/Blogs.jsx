import { React, useEffect } from 'react';
import { projects } from '../data/ProjectDescriptions';

import ProjectSingle from '../components/reusable/ProjectSingle';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import BlogSingle from '../components/reusable/BlogSingle';

function Blogs(props) {

    var [blogs, setBlogs] = useState(
        {
            profile: {
                ptitle: "",
                name: "",
                avtar: "",
                profileurl: "",
            },
            item: [],
            isloading: true,
            error: null
        }
    )
    var mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@josephxu1234";


    axios.get(mediumURL)
        .then((data) => {
            // console.log(data.data)
            const avatar = data.data.feed.image;
            const profileLink = data.data.feed.link;
            const res = data.data.items; //This is an array with the content. No feed, no info about author etc..
            const posts = res.filter(item => item.categories.length > 0);

            const title = data.data.feed.title;

            setBlogs(
                (pre) => ({
                    profile: {
                        ...pre.profile,
                        ptitle: title,
                        profileurl: profileLink,
                        avtar: avatar,

                    },
                    item: posts,
                    isloading: false
                }),
                () => {
                    console.log(this.state);
                }
            );
            console.log(data, res);
        })
        .catch((e) => {
            setBlogs({ error: e.toJSON() })
            console.log(e);
        });

// disable the context menu. weird glitch in safari?
useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
        // prevent the right-click menu from appearing
        e.preventDefault()
    }

    // attach the event listener to 
    // the document object
    document.addEventListener("contextmenu", handleContextMenu)

    // clean up the event listener when 
    // the component unmounts
    return () => {
        document.removeEventListener("contextmenu", handleContextMenu)
    }
}, [])

return (

    
    <div className="container mx-auto lg:mt-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 text-lg text-ternary-dark dark:text-ternary-light">
            {blogs.item.slice(0,3).map(
                (post, index) => (
                    <BlogSingle title={post.title} image={post.thumbnail} date={moment(post.pubDate).format("MMM DD, YYYY")} link={post.link}/>
                )
            )}

        </div>
    </div>
);
}


/*{title, pubDate, link, guid, author, thumbnail, description, content, enclosure, categories}) */


export default Blogs;