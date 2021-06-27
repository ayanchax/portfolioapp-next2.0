import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Blogs.css"
function BlogCard({ blog }) {
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div className="blog-item">
            <Card onClick={() => window.open(`${blog.url}`)}>
                <CardContent>
                    <Typography title={blog.name} className="blog-title" color="textPrimary" gutterBottom>
                        {truncate(blog.name, 20)}
                    </Typography>

                    <Typography color="textSecondary">
                        {blog.published}
                    </Typography>
                    <br />
                    <Typography className="blog-meta" variant="body1" component="blockquote">
                        {truncate(blog.meta, 100)}
                    </Typography>

                </CardContent>
                <CardActions>
                    <Button title="Visit blog"
                        onClick={() => window.open(`${blog.url}`)}
                        className="blog-link" size="small">
                        <div className="link-icon">
                            <i className="fa fa-link"></i>
                        </div>&nbsp;
                        Read More</Button>

                </CardActions>
            </Card>
        </div>
    )
}

export default BlogCard
