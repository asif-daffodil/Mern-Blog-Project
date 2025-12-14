import asifAbir from "../../../assets/images/Asif-Abir.jpg";

const Hero = () => {
    return (
        <div className="container mx-auto px-5 md:px-0 flex flex-col-reverse md:flex-row justify-between gap-4 md:gap-8 py-3 md:py-6">
            <div className="flex-1/2 flex flex-col justify-center items-center md:items-start gap-3 md:gap-6">
                <h2 className="text-3xl md:text-6xl">Hi!</h2>
                <p className="text-xl md:text-3xl underline underline-offset-8">Welcome to my blog!</p>
                <p className="text-center md:text-start">My name is Asif Abir. I am a web developer and blogger. I love to share my knowledge and experience with others. I hope you find my content useful and inspiring. Here you will find articles on web development, programming, and technology. This is my space to connect with like-minded individuals and grow together. I hope you enjoy your stay!</p>
                <button className="bg-blue-600 text-white font-bold w-max px-3 py-2 rounded cursor-pointer hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-400 transition duration-300">Read More</button>
            </div>
            <div className="flex-1/2">
                <img src={asifAbir} alt="Asif Abir" className="w-full md:w-2/3 ml-auto object-cover" />
            </div>
        </div>
    );
};

export default Hero;