import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO, Tech Innovations",
            feedback:
                "This company has revolutionized the way we manage our employees. Their platform is intuitive, efficient, and has saved us countless hours!",
            image: "https://i.pravatar.cc/150?img=1",
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "HR Manager, Green Solutions",
            feedback:
                "I can't recommend them enough! Their payroll management and attendance tracking tools are a game-changer.",
            image: "https://i.pravatar.cc/150?img=2",
        },
        {
            id: 3,
            name: "Michael Brown",
            role: "Team Lead, Creative Studio",
            feedback:
                "The performance review features have helped us identify key areas of improvement and foster employee growth. Fantastic service!",
            image: "https://i.pravatar.cc/150?img=3",
        },
    ];

    return (
        <div className="py-12 bg-gray-200">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">
                    What Our Clients Say
                </h1>
                <p className="text-lg text-gray-600 mb-12">
                    Hear from our satisfied clients and see how we’ve transformed their businesses.
                </p>

                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="w-full max-w-4xl mx-auto"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-orange-400 p-8 rounded-lg hover:bg-[#3E007C] shadow-lg">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gray-200"
                                />
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {testimonial.name}
                                </h3>
                                <p className="text-gray-600 italic mb-4">
                                    {testimonial.role}
                                </p>
                                <p className="text-gray-600">{testimonial.feedback}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
