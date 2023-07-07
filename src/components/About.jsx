
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "../styles/About.css"

const About = () => {
    return (
        <div className="about-container">
            <div className="left">
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugiat quisquam, molestiae commodi quia cumque nam explicabo dignissimos tempore assumenda qui debitis, excepturi repudiandae in perspiciatis dolorum error autem soluta id sunt? Dolore, excepturi iure odio, deserunt corrupti labore omnis ipsam laborum ullam sunt ipsa quis tenetur ea dolorum provident qui praesentium sit autem. Alias animi necessitatibus voluptate cumque voluptatum inventore, aspernatur aliquam fugiat sint voluptatibus! In illo deserunt quaerat beatae debitis perferendis sequi animi dolorum ipsa nobis sapiente accusantium, non voluptatem rem, delectus nulla quasi, laboriosam voluptas sit quod cupiditate iure consequatur commodi. Deserunt, perspiciatis! Totam dolorum officiis tempora.</p>
                <h1>Contact with us </h1>
                <div className="icon">
                    <InstagramIcon />
                </div>
                <div className="icon">
                    <FacebookIcon />
                </div>
                <div className="icon">
                    <TwitterIcon />
                </div>
                <div className="icon">
                    <YouTubeIcon />
                </div>
            </div>
            <div className="right">
                <div className="img">
                    <img className="bg-img" src="https://static.vecteezy.com/system/resources/previews/018/927/185/non_2x/business-meeting-illustration-in-flat-design-style-man-and-woman-sitting-at-the-table-discussing-business-strategy-vector.jpg" alt="" />
                </div>
            </div>
        </div>

    )
}

export default About