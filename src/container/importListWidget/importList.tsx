import FileUpload from "@/components/inputs_elements/file_upload";
import './styles.css'

interface IImportListProps {
  file : IFileObject,
  shapes: ILayer[];
  onchangeAction: (fileUrl: string | null,fileName : string) => void;
  onRemoveLayer : (idx: number)=> void;
}

export interface IFileObject{
  url: string | null,
  name : string
}

export interface ILayer {
  name: string;
  type : 'shape'
}

export default function ImportList(props: IImportListProps) {

  const handleRemove = (idx: number)=>{
    props.onRemoveLayer(idx);
  }

  return (
    <div className="layer">
      <label className="my-2 text-xl font-['Verdana']">Layers</label>
      <div className="flex flex-col">
        <div className="layer-item">
          <span>{props.file.name}</span>
          <FileUpload onchangeAction={props.onchangeAction} />
        </div>
        {
          props.shapes.map((layer,idx)=>{
            return <div className="layer-item" key={idx}>
              <span>{layer.name}</span>
              <span className="layer-remove" onClick={()=>{handleRemove(idx)}}>Remove</span>
              </div>
          })
        }
      </div>      
    </div>
    
  );
}
