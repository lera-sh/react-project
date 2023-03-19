import collage from '/collage.png';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h3>
        What is the most beautiful place in the world? To compile the world&apos;s most beautiful
        places is an inherently subjective and impossible task, but we&apos;d like to think that
        this list at least scratches the surface of some of the extraordinary beauty the world has
        to offer.
        <span className="about-none">
          {' '}
          Focusing largely on national parks, mountains, beaches, deserts, and other natural
          wonders, our list is sure to inspire your next dream destination. Join us for a journey to
          some of the most beautiful places in the world, from temple ruins on the slopes of the
          Andes to mountains with dizzying colorful layers to glorious coral reefs.
        </span>
      </h3>
      <img className="about-img" src={collage} alt="" />
    </div>
  );
};

export default AboutUs;
