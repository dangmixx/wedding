export interface AppConfig {
    titlePage: string;
    nameOfCR: string;
    nameOfCD: string;
    nameAndOr: string;
    targeDate: string;
    googleMapUrl: string;
    location: string;
    address: string;
    phoneOfLocation: string;
    bannerImage: string;
    columnImage1: ListImage[];
    columnImage2: ListImage[];
    columnImage3: ListImage[];
    listImage: ListImage[];
    videoUrl: string;
    dressCode: string[];
}

export interface ListImage {
    itemImageSrc: string;
    alt: string;
    title: string;
}

export interface InvitationFrom {
    Name: string;
    From: string;
    Quality: string;
    Yes: boolean;
    Note: string;
}
