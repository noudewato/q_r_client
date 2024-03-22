import './scroll.css'

const menu = ['JOLLOF RICE', 'FRIED RICE', 'NOODLES', 'ICE CREAM', 'FRIES', 'FISH', 'EXTRAS', 'DRINKS'];

const HorizontalScroll = () => {
  return (
    <div className="horizontal-scroll">
      <div className="menu-items">
        {menu.map((item, index) => (
          <div key={index} className="menu-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
