import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controller/postController.js';
const router = express.Router();


// setup static folder
// router.use(express.static(path.join(__dirname, 'public')));



// Get all posts with optional limit query
router.get('/', getPosts);

// Get single post
router.get('/:id', getPost);

// Create a new post 
router.post('/', createPost);

// Update a post
router.put('/:id', updatePost)

// Delete a post
router.delete('/:id', deletePost)

export default router;