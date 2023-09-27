import { ProjectDocumentData } from '../../prismicio-types'

export interface TechsProjects{
    tech: string;
    image?: string;
  }
export interface TechProps{
tech: string;
text: string;
order: number;
level: string;
}
export interface ProjectProps {
    id: string;
    title: string;
    text: string;
    techs: TechsProjects[],
    image: { alt: string; src: string; },
    src: string | null;
    github: string | null; 
}
export interface AboutProps{
text: string;
}
export interface ServerProps {
projectsPersonal: ProjectProps[];
projectsGroup: ProjectProps[];
about: AboutProps;
tech: TechProps[];
}

export interface NewProjectsDocuments extends ProjectDocumentData{
order: number;
}