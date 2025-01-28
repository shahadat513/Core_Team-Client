const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: "Streamlined HR Processes",
            description:
                "Reduce administrative burdens with automated workflows and efficient tools designed for modern HR needs.",
            icon: "🚀",
        },
        {
            id: 2,
            title: "Secure & Reliable",
            description:
                "Our platform is built with state-of-the-art security protocols, ensuring your data is always safe and protected.",
            icon: "🔒",
        },
        {
            id: 3,
            title: "Customizable Solutions",
            description:
                "Tailor our platform to fit your organization’s specific requirements for better flexibility and scalability.",
            icon: "⚙️",
        },
        {
            id: 4,
            title: "24/7 Support",
            description:
                "Get round-the-clock assistance from our dedicated support team, ensuring your operations run smoothly.",
            icon: "📞",
        },
    ];

    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    Why Choose Us?
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    Discover how we help organizations like yours achieve seamless employee management.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-gray-100 p-6 hover:bg-[#8b46d0] hover:text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
