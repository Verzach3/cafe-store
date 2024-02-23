
export interface FetchCategories {
    category_id: string;
    item_id: string;
}

export interface FetchCategory {
    id: string;
    name: string;
}

export interface FetchProducts {
    name: string;
    description: string;
    images: string;
    price: number;
    id: string;
}

export interface FetchTosting {
    collectionId: string;
    id: string;
    product: string[];
    tosting: string;
}