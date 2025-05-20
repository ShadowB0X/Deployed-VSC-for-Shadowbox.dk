import { useState } from 'react';

export default function UploadPage({ token }) {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('https://api.powersurge.dk/api//audio/upload', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    if (res.ok) {
      alert('Upload successful');
    } else {
      alert('Upload failed');
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <h2>Upload Audio</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Upload</button>
    </form>
  );
}
