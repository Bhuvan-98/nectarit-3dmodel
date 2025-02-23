import { useState } from "react";


interface IFileUploadProps {
  onchangeAction: (fileUrl: string | null) => void;
}

export default function FileUpload(props: IFileUploadProps) {
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (!file.name.endsWith(".glb") && !file.name.endsWith(".gltf")) {
        alert("Please upload a .glb or .gltf file");
        return;
      }

      const url = URL.createObjectURL(file);
      setFileUrl(url);
      props.onchangeAction(url)
    }
  };

  return (

    <div className="flex flex-col items-center">
      <input type="file" accept=".glb,.gltf" onChange={handleFileUpload} />

    </div>

  );
}
