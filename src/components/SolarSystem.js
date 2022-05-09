import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="planetas" />
        {planets.map((item) => (
          <PlanetCard
            planetImage={ item.image }
            planetName={ item.name }
            key={ item.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
