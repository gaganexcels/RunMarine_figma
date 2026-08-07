import { createHashRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { AboutOverview } from './pages/about/AboutOverview';
import { OurStory } from './pages/about/OurStory';
import { MissionVision } from './pages/about/MissionVision';
import { LeadershipTeam } from './pages/about/LeadershipTeam';
import { Certifications } from './pages/about/Certifications';
import ServicesOverview from './pages/services/ServicesOverview';
import TechnicalManagement from './pages/services/TechnicalManagement';
import CrewManagement from './pages/services/CrewManagement';
import TechnicalServices from './pages/services/TechnicalServices';
import Chartering from './pages/services/Chartering';
import GreenRecycling from './pages/services/GreenRecycling';
import MarineSpares from './pages/services/MarineSpares';
import PayrollTax from './pages/services/PayrollTax';
import TrainingOverview from './pages/training/TrainingOverview';
import TrainingDevelopment from './pages/training/TrainingDevelopment';
import RecruitmentPolicy from './pages/training/RecruitmentPolicy';
import EnvironmentPolicy from './pages/training/EnvironmentPolicy';
import SafetyPolicy from './pages/training/SafetyPolicy';
import { FleetOverview } from './pages/fleet/FleetOverview';
import { BulkCarrier } from './pages/fleet/BulkCarrier';
import { GeneralCargo } from './pages/fleet/GeneralCargo';
import { Panamax } from './pages/fleet/Panamax';
import { Kamsarmax } from './pages/fleet/Kamsarmax';
import { Capesize } from './pages/fleet/Capesize';
import { Ultramax } from './pages/fleet/Ultramax';
import { PostPanamax } from './pages/fleet/PostPanamax';
import { Aframax } from './pages/fleet/Aframax';
import { Suezmax } from './pages/fleet/Suezmax';
import { MRTanker } from './pages/fleet/MRTanker';
import { ContainerVessel } from './pages/fleet/ContainerVessel';
import { MiniBulker } from './pages/fleet/MiniBulker';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';

export const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },

      // About routes
      { path: 'about', Component: AboutOverview },
      { path: 'about/our-story', Component: OurStory },
      { path: 'about/mission-vision', Component: MissionVision },
      { path: 'about/leadership', Component: LeadershipTeam },
      { path: 'about/certifications', Component: Certifications },

      // Services routes
      { path: 'services', Component: ServicesOverview },
      { path: 'services/technical-management', Component: TechnicalManagement },
      { path: 'services/crew-management', Component: CrewManagement },
      { path: 'services/technical-services', Component: TechnicalServices },
      { path: 'services/chartering', Component: Chartering },
      { path: 'services/green-recycling', Component: GreenRecycling },
      { path: 'services/marine-spares', Component: MarineSpares },
      { path: 'services/payroll-tax', Component: PayrollTax },

      // Training routes
      { path: 'training', Component: TrainingOverview },
      { path: 'training/development', Component: TrainingDevelopment },
      { path: 'training/recruitment-policy', Component: RecruitmentPolicy },
      { path: 'training/environment-policy', Component: EnvironmentPolicy },
      { path: 'training/safety-policy', Component: SafetyPolicy },

      // Fleet routes
      { path: 'fleet', Component: FleetOverview },
      { path: 'fleet/bulk-carrier', Component: BulkCarrier },
      { path: 'fleet/general-cargo', Component: GeneralCargo },
      { path: 'fleet/panamax', Component: Panamax },
      { path: 'fleet/kamsarmax', Component: Kamsarmax },
      { path: 'fleet/capesize', Component: Capesize },
      { path: 'fleet/ultramax', Component: Ultramax },
      { path: 'fleet/post-panamax', Component: PostPanamax },
      { path: 'fleet/aframax', Component: Aframax },
      { path: 'fleet/suezmax', Component: Suezmax },
      { path: 'fleet/mr-tanker', Component: MRTanker },
      { path: 'fleet/container-vessel', Component: ContainerVessel },
      { path: 'fleet/mini-bulker', Component: MiniBulker },

      // Contact route
      { path: 'contact', Component: ContactPage },

      // 404
      { path: '*', Component: NotFound },
    ],
  },
]);
