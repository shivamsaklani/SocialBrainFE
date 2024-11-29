import React from "react";

export function CustomTags({tag}:{
    tag:string
}){

    const [selectedTags, setSelectedTags] = React.useState([]); // State to track selected tags

const toggleTag = (tag) => {
  if (selectedTags.includes(tag)) {
    // If the tag is already selected, remove it
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  } else {
    // Otherwise, add it to the selected tags
    setSelectedTags([...selectedTags, tag]);
  }
};
    return(
        <>
        <span
    className={`px-3 py-1 cursor-pointer rounded-md text-white bg-gray flex justify-center items-center ${
      selectedTags.includes(tag) ? 'bg-primary text-white' : 'bg-gray-300'
    }`}  onClick={() => toggleTag(tag)}>

            <div className="flex justify-center items-center">
                    {tag}
            </div>

        </span>
        </>
    )
}