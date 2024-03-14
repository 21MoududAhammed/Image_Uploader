import { useState } from "react";
import uploadIcon from "../assets/upload-icon.jpg";
import editIcon from "../assets/edit.png";
export default function ImageUploader() {
  const [avatar, setavatar] = useState(uploadIcon);

  const handleUploadImage = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="relative h-56 w-56 rounded-full">
        <img className=" w-56 h-56 rounded-full" src={avatar} alt="" />
        <form encType="multiple/form-data">
          <button type="submit" onClick={handleUploadImage}>
            <img
              className="absolute top-40 right-8 w-8 h-8 "
              src={editIcon}
              alt=""
            />
          </button>

          <input type="file" name="" id="" hidden />
        </form>
      </div>
    </div>
  );
}
