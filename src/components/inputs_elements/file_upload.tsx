import { useState, useRef } from "react";
import './styles.css'

interface IFileUploadProps {
  onchangeAction: (fileUrl: string | null, fileName: string) => void;
}

export default function FileUpload(props: IFileUploadProps) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (!file.name.endsWith(".glb") && !file.name.endsWith(".gltf")) {
        alert("Please upload a .glb or .gltf file");
        return;
      }

      const url = URL.createObjectURL(file);
      props.onchangeAction(url, file.name)
    }
  };

  return (
    <span className="flex flex-col items-center">
      <input className="hide" type="file" accept=".glb,.gltf" onChange={handleFileUpload} ref={fileInputRef} />
      <label
        onClick={() => fileInputRef.current?.click()}
        className="file-upload"
      >
        Upload
      </label>
    </span>

  );
}
