// src/components/NGOList.jsx
import NGOCard from './NGOCard';

const NGOList = ({ ngos }) => {
  return (
    <div className="ngo-list">
      {ngos.map(ngo => (
        <NGOCard key={ngo.id} ngo={ngo} />
      ))}
    </div>
  );
};

export default NGOList;
