import { ProjectVisual } from '../data/projects';
import ProjectArchitectureDiagram from './ProjectArchitectureDiagram';

interface ProjectCoverProps {
  visual: ProjectVisual;
}

export default function ProjectCover({ visual }: ProjectCoverProps) {
  return <ProjectArchitectureDiagram visual={visual} compact />;
}
