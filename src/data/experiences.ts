
import { StaticImageData } from 'next/image';
import sltLogo from '/public/assets/slt-logo.webp'; 
import bullet from '/public/assets/bullet.png'; 

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo?: StaticImageData;
  techStack?: string[];
  isFeatured?: boolean;
  documents?: { title: string; url: string }[];
}

export const experiences: Experience[] = [
  {
    id: 'slt-internship',
    company: 'Sri Lanka Telecom Mobitel (SLT Mobitel)',
    role: 'Intern - DevOps & Cloud Operations',
    duration: 'Jun 2024 - Dec 2024',
    description: [
      'Collaborated with the DevOps and System Administration team in the Digital Platforms division to design and \nimplement robust CI/CD pipelines using Github actions, Azure DevOps and Jenkins, streamlining application deployments and enhancing operational efficiency.',
      'Deployed and managed containerized applications with Docker, while establishing a three-node Kubernetes cluster on SLT testing servers (including one master node), complete with Calico for pod networking; successfully installed Kubernetes and orchestrated a web application deployment to validate cluster functionality.',
      'Configured web hosting environments utilizing Nginx and Apache servers, hosting diverse applications including React frontends, Laravel and .NET backends, and associated databases such as MongoDB and MySQL, ensuring seamless integration and performance optimization.',
      'Administered a portfolio of Windows and Linux servers across on-premises and cloud environments, leveraging VMware ESXi for virtual machine creation and management; integrated on-premises servers with Azure via Azure Connect for centralized oversight and hybrid infrastructure control.',
      'Implemented proactive monitoring solutions by installing Zabbix on key servers, enabling real-time issue detection and timely reporting to stakeholders; troubleshot and resolved server-related incidents efficiently to minimize downtime.',
      'Enforced industry-leading security protocols, including Just Enough Administration (JEA), Just-In-Time (JIT) access, and Zero Trust principles, while configuring SSL certificates to secure HTTPS traffic for hosted applications.',
      'Conducted a comprehensive site visit to SLT\'s Tier 3 data center in Pitipana, exploring critical infrastructure components such as the Network Operations Center (NOC), server rooms, chilled water cooling systems, generator facilities, and technical rooms; authored a detailed report summarizing insights and operational best practices gained from the experience.',
      'Administered a diverse set of servers running CentOS, Ubuntu, Rocky Linux, Red Hat Enterprise Linux, and Kali Linux, performing software installations, database configurations, and enabling remote access via XRDP for RDP connectivity.',
      'Managed secure access to cloud-based Linux systems using Termius for SSH, authenticating with SSH keys and disabling password authentication to align with industry best practices; facilitated secure file transfers using SFTP within Termius.',
      'Leveraged Gunicorn and Uvicorn for hosting Python-based applications, and utilized Azure App Service and AWS Elastic Beanstalk for dynamic web hosting, alongside AWS S3 for static site hosting.',
      'Implemented VNet peering to enable seamless data transfer across networks.'
    ],
    logo: sltLogo,
    techStack: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD','RHEL'],
    isFeatured: true,
    documents: [
      { title: 'Data Center Visit Report', url: '/Documents/Report on Datacenter Visit.pdf' },
      { title: 'Kubernetes Cluster Setup Guide', url: '/Documents/Creating Kubernetes Cluster.pdf' },
      { title: 'Zabbix Installation Guide', url: '/Documents/Zabbix Installation Guide.pdf' },
      { title: 'Hosting MERN Application Guide', url: '/Documents/Hosting MERN on RockyLinux-server.pdf' },
      { title: 'Guide on creating Virtual Machines in VMWare', url: '/Documents/How to Create a Virtual Machine in VMware ESXI.pdf' },
      { title: 'Industrial Training Report', url: '/Documents/Industrial Training Report.pdf' },
    ],
  },
 
];