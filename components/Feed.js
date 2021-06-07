import React from "react"
import InputBox from "./InputBox"
import Stories from "./Stories"

import Posts from "./Posts"


function Feed({posts}) {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto no-scrollbar">
            <div className="mx-auto max-w-md md:w-lg lg:max-w-2xl">
            {/* Stories */}
            <Stories />

            {/* Input Box */}
            <InputBox/>

            {/* Posts */}

            <Posts posts={posts}/>

            
            </div>
        </div>
    )
}

export default Feed
