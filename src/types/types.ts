export type Products = {
    page:       number;
    perPage:    number;
    totalItems: number;
    totalPages: number;
    items:      Item[];
}

export type Item = {
    collectionId:   string;
    collectionName: string;
    created:        string;
    description:    string;
    id:             string;
    images:         string[];
    name:           string;
    price:          string;
    updated:        string;
    expand:         expand;
}

export type Product = {
    name: string;
    price: string;
    description: string;
    images: string;
    id : string;
}

type expand = {
    category_id: category_id;
    item_id:     Product;
}

export type category_id = {
    id: string;
    name: string;
}


