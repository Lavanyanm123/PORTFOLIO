import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState({});

  // Fetch projects from backend when component loads
  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  // Like a project - sends request to backend
  const handleLike = async (projectId) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/projects/${projectId}/like`);
      // Update the projects state with the updated project
      setProjects(projects.map(project => 
        project._id === projectId ? response.data : project
      ));
    } catch (error) {
      console.error('Error liking project:', error);
    }
  };

  // Add a comment - sends request to backend
  const handleComment = async (projectId) => {
    const text = commentText[projectId];
    if (!text || text.trim() === '') return;
    
    try {
      const response = await axios.post(`http://localhost:5000/api/projects/${projectId}/comment`, {
        text: text.trim()
      });
      // Update the projects state with the updated project
      setProjects(projects.map(project => 
        project._id === projectId ? response.data : project
      ));
      // Clear the comment input
      setCommentText({ ...commentText, [projectId]: '' });
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  if (loading) {
    return (
      <div className="container my-5 text-center text-white">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading projects...</p>
      </div>
    );
  }

  return (
    <div className="container my-5 text-white">
      <h2 className="text-center mb-4 text-success">My Projects</h2>
      <p className="text-center mb-4">Click the like button and add comments to my projects!</p>
      
      <div className="row justify-content-center">
        {projects.map((project, idx) => (
          <div key={project._id} className="col-12 col-md-4 mb-4">
            <motion.div
              className="card h-100 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                
                <div className="mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge bg-info text-dark me-1 mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  className="btn btn-outline-dark btn-sm mb-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
                
                {/* Like button */}
                <div className="mb-3">
                  <button 
                    className="btn btn-warning btn-sm"
                    onClick={() => handleLike(project._id)}
                  >
                    ❤️ Like ({project.likes})
                  </button>
                </div>
                
                {/* Comment section */}
                <div className="border-top pt-3">
                  <h6>Comments:</h6>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Add a comment..."
                      value={commentText[project._id] || ''}
                      onChange={(e) => setCommentText({ 
                        ...commentText, 
                        [project._id]: e.target.value 
                      })}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleComment(project._id);
                        }
                      }}
                    />
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleComment(project._id)}
                    >
                      Add
                    </button>
                  </div>
                  
                  {/* Display comments */}
                  <div className="comments-list">
                    {project.comments.map((comment, commentIdx) => (
                      <div key={commentIdx} className="alert alert-light py-2 mb-2">
                        <small className="text-muted">
                          {new Date(comment.date).toLocaleDateString()}
                        </small>
                        <div>{comment.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;