import { useEffect, useState } from 'react';

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('https://api.powersurge.dk/api//audio/result')
      .then(res => res.json())
      .then(data => {
        console.log("👉 Data modtaget fra API:", data);
        setFiles(data.results); // Brug kun result-listen
      })
      .catch(err => console.error("❌ Fejl i fetch:", err));
  }, []);

  return (
    <div>
      <h2>Audio Files</h2>
      <ul>
        {files.map(f => (
          <li key={f.id}>
            <strong>{f.audioFile?.filename}</strong> – BPM: {f.audioFile?.bpm?.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}
