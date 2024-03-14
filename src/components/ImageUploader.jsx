import { useState } from "react";
import uploadIcon from "../assets/upload-icon.jpg";
import editIcon from "../assets/edit.png";
import { useRef } from "react";
export default function ImageUploader() {
  const [avatar, setAvatar] = useState(uploadIcon);
  const uploadImageRef = useRef();

  const handleUploadImage = (e) => {
    e.preventDefault();
    uploadImageRef.current.click();
  };

  const handleDisplayImage = () => {
    const uploadedImage = uploadImageRef.current.files[0];
    const cashedURL = URL.createObjectURL(uploadedImage);
    setAvatar(cashedURL);
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

          <input
            ref={uploadImageRef}
            type="file"
            onChange={handleDisplayImage}
            hidden
          />
        </form>
      </div>
    </div>
  );
}
