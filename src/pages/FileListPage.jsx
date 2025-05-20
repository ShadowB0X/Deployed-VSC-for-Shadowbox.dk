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
      <h2>Audio Files</h2>
      <ul>
        {files.map(f => (
          <li key={f.id}>{f.filename}</li>
        ))}
      </ul>
    </div>
  );
}
