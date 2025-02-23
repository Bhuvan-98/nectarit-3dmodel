import { useState } from "react";


interface ILayer {
  name: string;
}

export default function FileUpload(props: IFileUploadProps) {
  const [layers, setLayers] = useState<ILayer[]>([]);

 

  return (

    <div className="flex flex-col items-center">
      <input type="file" accept=".glb,.gltf" onChange={handleFileUpload} />

    </div>

  );
}
