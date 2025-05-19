export interface Statistics {
    homeHeading: string;
    imageBase64: string;
    reader: string;
    article: string;
    healthTopic: string;
  }

 export interface CategoryWithSubcategory {
    categoryId: string;
    subcategoryId: string;
  }

//   interface PetCareConnectData {
//     // Define the fields here
//     title: string;
//     description: string;
//   }
  
//   export interface PetCareData {
//     petCareConnect?: PetCareConnectData;
//   }

//   export interface PetCareConnectData {
//     paragraph: string;
//     image: string;
//     heading: string;
//   }
  
//   export interface Timestamp {
//     seconds: number;
//     nanoseconds: number;
//   }
  
//   export interface PetCareData {
//     createdAt: Timestamp;
//     petCareConnect: PetCareConnectData;
//   }

  export interface Timestamp {
    seconds: number;
    nanoseconds: number;
  }
  
  export interface PetCareData {
    paragraph: string;
    image: string;
    heading: string;
    createdAt?: Timestamp;
  }

 export interface ContentBlock {
    type: string;
    value: string;
    src:string;
    alt:string;
  }
  export interface ContentItem {
    id: string;
    categoryId: string;
    subcategoryId: string;
    content: ContentBlock[];
    createdAt?: unknown;
    [key: string]: unknown;
  }
  