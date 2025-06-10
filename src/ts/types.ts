// types.ts

interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

interface Social {
    name: string;
    url: string;
    className: string;
}

interface MainData {
    name: string;
    description: string;
    bio: string;
    contactmessage: string;
    email: string;
    phone: string;
    github: string;
    project: string;
    address: Address;
    website: string;
    resumeDownload: string;
    social: Social[];
}

interface Education {
    school: string;
    degree: string;
    graduated: string;
    description: string;
}

export interface Work {
    company: string;
    title: string;
    years: string;
    description: string;
}

interface ResumeSection {
    skillmessage: string;
    education: Education[];
    work: Work[];
}

export interface ResumeData {
    main: MainData;
    resume: ResumeSection;
}
