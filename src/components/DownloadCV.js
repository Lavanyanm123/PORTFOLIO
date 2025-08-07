import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

const DownloadCV = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  // Function to handle CV download
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a link to your CV file
    const link = document.createElement('a');
    link.href = '/LAVANYA-NM-CV.pdf'; // Your CV file should be in the public folder
    link.download = 'LAVANYA-NM-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="container my-5 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="mb-4 text-info">Download My Resume</h2>
        <p className="mb-4 fs-5">
          Want to know more about my skills and experience? Download my detailed CV!
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="d-inline-block"
        >
          <button
            className={`btn btn-lg ${isDownloading ? 'btn-secondary' : 'btn-success'}`}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Downloading...
              </>
            ) : (
              <>
                📄 Download CV
              </>
            )}
          </button>
        </motion.div>
        
       
      </motion.div>
    </div>
  );
};

export default DownloadCV;