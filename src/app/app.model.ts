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
    listImage: ListImage[];
    videoUrl: string;
    dressCode: string[]
}

export interface ListImage {
    itemImageSrc: string;
    alt: string;
    title: string;
}
