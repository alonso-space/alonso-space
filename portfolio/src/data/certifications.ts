import computerHardwareImg from "../assets/badges/computer-hardware-basics.png";
import computerHardwareFile from "../assets/badges/certifications/computer-hardware-basics.pdf";

import introCybersecurityImg from "../assets/badges/introduction-to-cybersecurity.png";
import introCybersecurityFile from "../assets/badges/certifications/intro-cybersecurity.pdf";

import linuxUnhatchedImg from "../assets/badges/linux-unhatched.png";
import linuxUnhatchedFile from "../assets/badges/certifications/linux-unhatched.pdf";

export type Certification = {
  title: string;
  issuer: string;
  link?: string;
  img?: string;
  file?: string;
};

export const certifications: Certification[] = [
  {
    title: "Linux Unhatched",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/d4593b40-0fb3-4a9c-bd66-7b496c020923/public_url",
    img: linuxUnhatchedImg,
    file: linuxUnhatchedFile,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/b33ec171-30f8-4b08-ad6d-f7a13b91b1ef/public_url",
    img: introCybersecurityImg,
    file: introCybersecurityFile,
  },
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco Networking Academy",
    link: "https://www.credly.com/badges/60201327-3d42-4ddf-8f74-073c4542edf8/public_url",
    img: computerHardwareImg,
    file: computerHardwareFile,
  },
];
