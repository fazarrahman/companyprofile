import ServiceCard from "./ui/servicecards";

const Services = () => {
    const services = [
        {id: 1, title: "Service 1", iconName: "BadgeCheck", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {id: 2, title: "Service 2", iconName: "Briefcase", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {id: 3, title: "Service 3", iconName: "BookOpen", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {id: 4, title: "Service 4", iconName: "Award", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {id: 5, title: "Service 5", iconName: "BadgeCheck", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"},
        {id: 6, title: "Service 6", iconName: "Briefcase", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
    ]
    return (
        <section className="section">
            <div className="section-title">
                Streamline your business with our services
            </div>
            <p className="mt-4 text-lg font-normal max-w-lg text-center mx-auto">
                We offer a wide range of services to help you grow your business.
            </p>
            {services.length == 0 ? (
                <p className="mt-4 text-lg font-normal max-w-lg text-center mx-auto">
                    No service available
                </p>
            ) : (
                <ServiceCard services={services} />
            )}
        </section>
    );
}

export default Services;