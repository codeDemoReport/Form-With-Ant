import React, { useEffect, useState } from 'react';

function Content(props) {

    const [avatar, setAvatar] = useState()
    

    useEffect(() => {
        console.log(avatar)
        return () => {
            // console.log(avatar)
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])


    const handlePreview = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

       setAvatar(file)
    }

    return (
        <div>
            <input type={"file"} onChange={handlePreview} />
            { avatar && <img src={ avatar.preview} alt="image"/>}
        </div>
    );
}

export default Content;