// export interface Product {
//     id: string;
//     name: string;
//     price: number;
//     image: string;
//     category: string;
//     description: string;
//     isNew?: boolean;
//     isFeatured?: boolean;
//   }

  export interface Product {
    _id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    category: string;
    description: string;
    rating?: number;
    reviews?: number;
    isFeatured?: boolean;
    isNew?: boolean;
    inStock?: boolean;
  };
  
  export interface BookingSlot {
    id: string;
    date: string;
    time: string;
    isAvailable: boolean;
  }
  
  export interface CartItem {
    productId: string;
    quantity: number;
  }
  
  export interface NavigationItem {
    title: string;
    href: string;
  }