import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Container} from "react-bootstrap";


function Upload(props) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "text/csv",
  });

  return (
    <div style={{ display: "flex", width: 600, padding: 30,  }}>
      <Container
        style={{
          backgroundColor: "#111827",
        }}
      >
        <div className="Upload">
          <div
            {...getRootProps({
              className: `dropzone 
          ${isDragAccept && "dropzoneAccept"} 
          ${isDragReject && "dropzoneReject"}`,
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Upload;
