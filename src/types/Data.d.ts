interface PlanetData {
  name: string;
  viewOption: {
    overview: { content: string; source: string };
    structure: { content: string; source: string };
    geology: { content: string; source: string };
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  design: {
    color: string;
    overview_mobile: string;
    overview_tablet: string;
    overview_desktop: string;
  };
}
