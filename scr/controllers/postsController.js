import getTodosPosts from "../models/postsModels.js";

export async function listarPosts(req, res) {
    // Chama a função para buscar todos os posts
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts
    res.status(200).json(posts);
} 
