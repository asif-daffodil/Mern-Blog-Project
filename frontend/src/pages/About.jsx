import asifAbir from "../assets/images/Asif-Abir2.jpg";

const About = () => {
    return (
        <div className="container mx-auto px-5 md:px-0 py-8 md:py-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center">About Me</h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">

                <div className="flex-shrink-0">
                    <img
                        src={asifAbir}
                        alt="Asif Abir"
                        className="shadow-lg rounded"
                    />
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Full-Stack & MERN Developer</h2>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        Hello, I'm <span className="font-semibold text-blue-600">Asif Mohammad Abir</span>, a passionate full-stack and MERN stack web developer. I specialize in transforming innovative ideas into high-quality digital solutions, focusing on creating engaging user interfaces that integrate seamlessly with robust backend systems.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        My expertise spans a wide range of modern web technologies, including <span className="font-medium">TypeScript, JSON, Redux, and Vue.js</span> for front-end development, alongside utilizing services like <span className="font-medium">Firebase, Docker, and Heroku</span> for deployment and infrastructure management.
                    </p>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            I hold certifications such as <span className="font-semibold">Zend Certified PHP Engineer</span> and <span className="font-semibold">Professional Web Developer (Level 4)</span> from NTVQF. I am dedicated to continuous learning and committed to delivering innovative solutions that harmonize aesthetic appeal with powerful functionality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;