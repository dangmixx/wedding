export interface AppConfig {
    titlePage: string;
    nameOfCR: string;
    nameOfCD: string;
    nameAndOr: string;
    targeDate: string;
    location: string;
    address: string;
    phoneOfLocation: string;
    bannerImage: string;
    listImage: ListImage[];
    videoUrl: string;
}

export interface ListImage {
    itemImageSrc: string;
    alt: string;
    title: string;
}
