const MeetOurTeam = () => {
    const team = [
        {
            id: 1,
            name: "Shahadat Sohel",
            role: "Founder & CEO",
            image: "https://i.ibb.co.com/pxyB2pJ/aedc86fa-f899-432a-9c2a-e0135ce0cc35.jpg",
            bio: "Shahadat has over 15 years of experience in HR and technology, leading the way for innovative employee management solutions.",
        },
        {
            id: 2,
            name: "Ebrahim Hossain",
            role: "CTO",
            image: "https://i.ibb.co.com/4MF19D0/Fiverr-pp.jpg",
            bio: "Robert oversees our tech operations, ensuring our platform remains fast, secure, and scalable.",
        },
        {
            id: 3,
            name: "Emily Davis",
            role: "Head of Customer Success",
            image: "https://i.ibb.co.com/P4ynvw5/20240321-142735.jpg",
            bio: "Emily is dedicated to helping our clients get the most out of our services through world-class support.",
        },
        {
            id: 4,
            name: "Mark Wilson",
            role: "Lead Developer",
            image: "https://i.ibb.co.com/Ch1VZv4/For-CV.jpg",
            bio: "Mark is the mastermind behind our intuitive platform, constantly improving its features and performance.",
        },
    ];

    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Meet Our Team
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    The people behind our platform are dedicated to empowering your organization with the best tools and support.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member) => (
                        <div
                            key={member.id}
                            className="bg-white p-6 hover:bg-[#3E007C] hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4 border-gray-200"
                            />
                            <h3 className="text-2xl font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                                {member.role}
                            </p>
                            <p className="text-gray-600  text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;
