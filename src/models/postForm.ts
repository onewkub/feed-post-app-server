interface PostForm {
  content: string;
  images?: PostImage[];
}

interface PostImage {
  data: string;
  postId: string;
  order?: number;
}

export default PostForm;
