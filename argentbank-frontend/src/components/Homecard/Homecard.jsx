function Homecard({ icon, title, description }) {
  return (
    <div className="feature-item">
      <img src={icon} alt="Feature Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p className="feature-item-description">{description}</p>
    </div>
  );
}
export default Homecard;
