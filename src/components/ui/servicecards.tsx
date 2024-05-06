import Icon, { IconName } from "./icon";

const ServiceCard = ({ services }: any) => {
    return (
        <div className="card-group">
            {services.map((svc: any) =>
                <div className="card" key={svc.id}>
                    <Icon name={svc.iconName} />
                    <a href="#">
                        <h5 className="card-title">{svc.title}</h5>
                    </a>
                    <p className="card-text">{svc.description}</p>
                </div>
            )}
        </div>
    );
}

export default ServiceCard;