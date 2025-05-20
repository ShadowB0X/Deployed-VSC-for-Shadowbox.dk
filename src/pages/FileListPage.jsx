import { useEffect, useState } from 'react';

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('https://api.powersurge.dk/api//audio/result')
      .then(res => res.json())
      .then(data => setFiles(data));
  }, []);

  return (
    <div>
      <h2>Analyzed Audio Files</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Filename</th>
            <th>BPM</th>
            <th>Result Data</th>
            <th>Uploaded At</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file) => (
            <tr key={file.id}>
              <td>{file.id}</td>
              <td>{file.audioFile?.filename}</td>
              <td>{file.audioFile?.bpm?.toFixed(2) ?? 'N/A'}</td>
              <td>{file.resultData}</td>
              <td>{file.audioFile?.uploadedAt?.split('T')[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
